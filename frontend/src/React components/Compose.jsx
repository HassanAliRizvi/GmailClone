import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen, setTo, setSubject, setBody, addEmail, closeCompose } from './redux/appSlice.js'; // Ensure correct import path
import { RxCross2 } from 'react-icons/rx';
import axios from 'axios';

const Compose = () => {
  const dispatch = useDispatch();
  const { to, subject, message } = useSelector((state) => state.app.email);

  const handleSend = async () => {
    const emailData = { to, subject, message };
    console.log('Sending email:', emailData);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/email/create', emailData, {
        withCredentials: true,
      });

      dispatch(addEmail(response.data.email)); // Update the emailList state with the new email
      dispatch(closeCompose());
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleDiscard = () => {
    dispatch(setTo(''));
    dispatch(setSubject(''));
    dispatch(setBody(''));
    dispatch(closeCompose());
  };

  return (
    <div className="fixed bottom-0 right-0 bg-white p-5 rounded-t-lg shadow-lg w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Compose Email</h1>
        <div onClick={() => dispatch(setOpen(false))} className="text-red-500 text-2xl cursor-pointer">
          <RxCross2 />
        </div>
      </div>
      <div className="mb-4">
        <input
          id="to"
          type="email"
          value={to}
          onChange={(e) => dispatch(setTo(e.target.value))}
          placeholder="To"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => dispatch(setSubject(e.target.value))}
          placeholder="Subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <textarea
          id="message"
          value={message}
          onChange={(e) => dispatch(setBody(e.target.value))}
          placeholder="Body"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-40"
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleDiscard}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Discard
        </button>
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Compose;







