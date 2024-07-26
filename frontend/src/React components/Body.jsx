import React from 'react';
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaInbox } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const Body = () => {
  return (
    <div className=' rounded-xl  p-6'>
      <div className='space-y-5'>

        {/* First row of icons */}
        <div className='flex items-center space-x-5'>
          <div className='flex space-x-2'>
            <PiSelectionBackgroundDuotone className='cursor-pointer' />
            <IoMdArrowDropdown className='cursor-pointer' />
          </div>
          <IoIosRefresh className='cursor-pointer' />
          <BsThreeDotsVertical className='cursor-pointer' />
        </div>

        {/* Second row of buttons */}
        <div className='flex space-x-9'>
          <button className='flex items-center space-x-1 py-5 px-6 hover:underline hover:text-blue-500'>
            <FaInbox />
            <h4>Primary</h4>
          </button>
          <button className='flex items-center space-x-1 py-5 px-6 hover:underline hover:text-blue-500'>
            <FaTags />
            <h4>Promotions</h4>
          </button>
          <button className='flex items-center space-x-1 py-5  px-6 hover:underline hover:text-blue-500'>
            <IoPeople />
            <h4>Social</h4>
          </button>
        </div>


      </div>
    </div>
  );
}

export default Body;