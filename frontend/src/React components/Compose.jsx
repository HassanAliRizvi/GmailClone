import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCompose, setTo, setSubject, setBody, addEmail } from './redux/appSlice';
import axios from 'axios';

const Compose = () => {
  const dispatch = useDispatch();
  const { to, subject, message } = useSelector((state) => state.app.email); // Note that this is using `body` now

  const handleSend = async () => {
    const emailData = { to, subject, message};  // Ensure to include necessary fields
    console.log('Sending email:', emailData);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/email/create', emailData, {
        withCredentials: true,
      });

      dispatch(addEmail(response.data.email));  // Assuming your API returns the created email object
      dispatch(closeCompose());
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleDiscard = () => {
    dispatch(setTo(''));
    dispatch(setFrom('')); // Assuming you have this in your state
    dispatch(setSubject(''));
    dispatch(setBody(''));
    dispatch(closeCompose());
  };

  return (
    <div className="fixed bottom-0 right-0 bg-white p-5 rounded-t-lg shadow-lg w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Compose Email</h1>
        <button onClick={() => dispatch(closeCompose())} className="text-red-500 text-2xl">&times;</button>
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
          value={message} // This should be `body` to match the state
          onChange={(e) => dispatch(setBody(e.target.value))}
          placeholder="Body"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
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



