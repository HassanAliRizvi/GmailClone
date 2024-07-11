import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInbox } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdDrafts } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BsGrid3X3Gap } from "react-icons/bs";
import axios from 'axios';
import toast from 'react-hot-toast';
import { setAuthUser } from './redux/appSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout');
      console.log(res);
  
      if (res.data && res.data.message) {
        toast.success(res.data.message);
      } else {
        toast.error('Unexpected response from server');
      }
  
      dispatch(setAuthUser(null));
      navigate("/login");
    } catch (error) {
      console.error('Error during logout:', error);
      toast.error('Failed to log out');
    }
  
  }
  return (
    <nav className='bg-white-200 w-full'>
      <div className='pt-6 space-y-4'>
        <div className='py-4 px-5 flex items-center w-full'>
          <RxHamburgerMenu className='cursor-pointer mr-2' />
          <img
            src="https://image.similarpng.com/very-thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png"
            alt="Gmail Logo"
            className="h-8 w-auto"
          />
          <h3 className='ml-2'>Gmail</h3>
          <div className='flex-grow mx-4'>
            <div className='rounded-full bg-gray-200 px-4 py-2 flex items-center space-x-4'>
              <button className='hover:bg-gray-300 rounded-xl p-1'>
                <CiSearch className="text-gray-500" />
              </button>
              <input
                type="text"
                placeholder="Search mail"
                className="bg-transparent outline-none text-gray-700 flex-grow"
              />
              <button className='hover:bg-gray-300 rounded-xl p-1'>
                <MdFilterList className='justify-end' />
              </button>
            </div>
          </div>
          <div className='flex space-x-2 ml-auto'>
            <button className='hover:bg-gray-300 rounded-xl p-1'>
              <FaRegQuestionCircle />
            </button>
            <button className='hover:bg-gray-300 rounded-xl p-1'>
              <FaGear />
            </button>
            <button className='hover:bg-gray-300 rounded-xl p-1'>
              <BsGrid3X3Gap />
            </button>
            <span onClick={logoutHandler} className='underline cursor-pointer'>Log Out</span>
          </div>
        </div>

  
      </div>
    </nav>
  );
}

export default Navbar;