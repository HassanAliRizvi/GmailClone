// src/components/Body.js
import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaReply, FaArchive } from "react-icons/fa";
import { MdArchive } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import axios from 'axios';

const EmailRow = ({ email }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='relative flex justify-between items-center p-4 hover:bg-gray-200 cursor-pointer rounded-2xl' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center space-x-3 cursor-pointer'>
        <BsThreeDotsVertical />
        <button>
          <MdCheckBoxOutlineBlank />
        </button>
        <button className='hover:text-yellow-500'>
          <CiStar className='star-icon' />
        </button>
        <h4 className='font-bold'>{email.to}</h4>
      </div>
      <div className='flex-grow'>
        <h4 className='text-center font-bold'>{email.subject}</h4>
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

const Body = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/email/getAllEmails', {
          withCredentials: true,
        });
        setEmails(response.data.emails);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className='rounded-xl col-span-full p-6'>
      {emails.map((email) => (
        <EmailRow key={email._id} email={email} />
      ))}
    </div>
  );
}

export default Body;


