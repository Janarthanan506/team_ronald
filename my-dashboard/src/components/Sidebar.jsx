import React from 'react';
import '../styles/Sidebar.css';

export default function Sidebar({ setActiveView }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => setActiveView('home')}>Home</li>
        <li onClick={() => setActiveView('jobs')}>Jobs</li>
        <li onClick={() => setActiveView('messages')}>Messages</li>
        <li onClick={() => setActiveView('settings')}>Settings</li>
      </ul>
    </div>
  );
}

