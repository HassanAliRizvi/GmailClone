import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './React components/Navbar';
import Body from './React components/Body';
import Sidebar from './React components/Sidebar';
import Email from './React components/Email'; // Assuming you have an Email component
import Compose from './React components/Compose';
import Login from './React components/Login';
import Signup from './React components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './React components/redux/store.js'; // Import the Redux store
import { PersistGate } from 'redux-persist/lib/integration/react.js';
import persistStore from 'redux-persist/es/persistStore';

let persistor = persistStore(store)

const MainLayout = () => {
  const [showCompose, setShowCompose] = useState(false);

  const toggleCompose = () => {
    setShowCompose(!showCompose);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className='order-first grid grid-cols-8'>
        <Sidebar toggleCompose={toggleCompose} />
        <div className="col-span-7 bg-white rounded-xl">
          <Body />
          <Email />
        </div>
      </div>
      {showCompose && <Compose onClose={toggleCompose} />}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap with Provider and pass the store */}
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>
);
