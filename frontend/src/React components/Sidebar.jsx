import React from 'react';
import { FaInbox } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { MdDrafts } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const Sidebar = ({ toggleCompose }) => {

  return (
    <div className='pt-20 space-y-2 px-2'>
      <button onClick={toggleCompose} className='flex py-5 bg-blue-100 rounded-xl p-5'>
        <FaPencilAlt />
        <h4 className='px-3'>Compose</h4>
      </button>
      <button className='py-1 px-4 flex items-center bg-gray-100 hover:px-6 hover:py-2 hover:bg-gray-300 rounded-xl'>
        <FaInbox className='mr-2' />
        <h4>Inbox</h4>
      </button>
      <button className='py-1 px-4 flex items-center hover:bg-gray-300 hover:px-6 hover:py-2 rounded-xl'>
        <CiStar className='mr-2' />
        <h4>Starred</h4>
      </button>
      <button className='py-1 px-4 flex items-center hover:bg-gray-300 hover:px-6 hover:py-2 rounded-xl'>
        <IoSend className='mr-2' />
        <h4>Sent</h4>
      </button>
      <button className='py-1 px-4 flex items-center hover:bg-gray-300 hover:px-6 hover:py-2 rounded-xl'>
        <MdDrafts className='mr-2' />
        <h4>Drafts</h4>
      </button>
    </div>
  );
}

export default Sidebar;