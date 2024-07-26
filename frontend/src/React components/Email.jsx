import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaReply, FaArchive } from "react-icons/fa";
import { MdArchive } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import axios from 'axios';
import { setEmailList, setSelectedEmail } from './redux/appSlice.js'; // Ensure correct import path
import EmailBody from './EmailBody'; // Import EmailBody component

const EmailRow = ({ email, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='relative flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer rounded-2xl' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className='flex items-center space-x-3 cursor-pointer'>
        <BsThreeDotsVertical />
        <button>
          <MdCheckBoxOutlineBlank />
        </button>
        <button className='hover:text-yellow-500'>
          <CiStar className='star-icon' />
        </button>
        <h4 className='text-center font-bold'>{email.subject}</h4>
      </div>
      <div>
        <h4 className='font-bold'>{email.message}</h4>
      </div>
      <div className='flex items-center space-x-2'>
        <h4 className='justify-end'>{new Date(email.createdAt).toLocaleTimeString()}</h4>
      </div>
      {isHovered && (
        <div className='absolute right-0 top-0 h-full flex items-center space-x-2 p-4 bg-gray-100'>
          <MdArchive className='hover:text-blue-500 cursor-pointer'/>
          <IoMdMailOpen className='hover:text-blue-500 cursor-pointer'/>
          <FaReply className='hover:text-blue-500 cursor-pointer'/>
          <FaArchive className='hover:text-blue-500 cursor-pointer' />
        </div>
      )}
    </div>
  );
}

const Email = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.app.emailList);
  const selectedEmail = useSelector((state) => state.app.selectedEmail);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/email/getAllEmails', {
          withCredentials: true,
        });
        dispatch(setEmailList(response.data.emails)); // Update the state with the fetched emails
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, [dispatch]);

  if (selectedEmail) {
    return <EmailBody email={selectedEmail} />; // Render the EmailBody component when an email is selected
  }

  return (
    <div className='rounded-xl col-span-full p-6'>
      {emails.map((email) => (
        <EmailRow 
          key={email._id} 
          email={email} 
          onClick={() => dispatch(setSelectedEmail(email))} // Set the selected email on click
        />
      ))}
    </div>
  );
}

export default Email;
