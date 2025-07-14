import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import DashboardContent from '../components/DashboardContent';
// import '../styles/Dashboard.css'; // optional global layout CSS

export default function Dashboard() {
  const [activeView, setActiveView] = useState('home');

  return (
    <div className="dashboard">
      <Sidebar setActiveView={setActiveView} />
      <div className="main-area">
        <Header />
        <DashboardContent view={activeView} />
      </div>
    </div>
  );
}
