// components/EmailBody.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedEmail } from './redux/appSlice.js';

const EmailBody = ({ email }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <button
        onClick={() => dispatch(setSelectedEmail(null))}
        className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Back
      </button>
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">{email.subject}</h1>
        <p className="text-sm text-gray-500">Inbox</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Email to: {email.to}</h2>
        <p className="text-sm text-gray-500">Sent: {new Date(email.createdAt).toLocaleString()}</p>
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
        <p className="text-gray-700 whitespace-pre-line">{email.message}</p>
      </div>
    </div>
  );
};

export default EmailBody;