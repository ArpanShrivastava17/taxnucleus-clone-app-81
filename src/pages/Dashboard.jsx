
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardOverview from '../components/DashboardOverview';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <DashboardSidebar onLogout={handleLogout} />
      
      <main className="dashboard-main">
        <Routes>
          <Route index element={<DashboardOverview />} />
          <Route path="inbox" element={<div className="dashboard-page"><h1>Inbox</h1><p>Inbox functionality coming soon...</p></div>} />
          <Route path="invoices" element={<div className="dashboard-page"><h1>Invoices</h1><p>Invoice management coming soon...</p></div>} />
          <Route path="chat" element={<div className="dashboard-page"><h1>Chat</h1><p>Chat functionality coming soon...</p></div>} />
          <Route path="clients" element={<div className="dashboard-page"><h1>Clients</h1><p>Client management coming soon...</p></div>} />
          <Route path="files" element={<div className="dashboard-page"><h1>Files</h1><p>File management coming soon...</p></div>} />
          <Route path="profile" element={<div className="dashboard-page"><h1>Profile</h1><p>Profile settings coming soon...</p></div>} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
