// components/Compose.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCompose, setTo, setFrom, setSubject, setBody } from './redux/appSlice';

const Compose = () => {
  const dispatch = useDispatch();
  const { to, from, subject, body } = useSelector((state) => state.app.email);

  const handleSend = () => {
    console.log('Sending email:', { to, from, subject, body });
    dispatch(closeCompose());
    // Add your send email logic, e.g., an API call to your backend
  };

  const handleDiscard = () => {
    dispatch(setTo(''));
    dispatch(setFrom(''));
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
          id="from"
          type="text"
          value={from}
          onChange={(e) => dispatch(setFrom(e.target.value))}
          placeholder="From"
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
          id="body"
          value={body}
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
