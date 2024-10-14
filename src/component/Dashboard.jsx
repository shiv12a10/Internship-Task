import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen flex">
      <nav className="w-64 bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between m-1 p-0 bg-gray-900 rounded-lg shadow-md">
          {/* Company Name Section */}
          <div className="flex items-center m-2 justify-center w-24 h-12 text-lg font-semibold text-white bg-gray-900 p-3 rounded-md shadow">
            TechCorp
          </div>
          <div className="flex items-center justify-center w-48 h-12 bg-gray-900  rounded-md shadow">
            <img
              src="/cartoon.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-indigo-500"
            />
          </div>
        </div>




        <ul className="space-y-4">
          <li><a href="#" className="hover:bg-gray-700 p-2 block rounded">Dashboard</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 block rounded">Profile</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 block rounded">Settings</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Welcome, User</h1>
          <div>
            <button
              onClick={handleLogout} // Call handleLogout on button click
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content goes here */}
        <div className="mt-10">
          <p>This is where dynamic content will be displayed.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
