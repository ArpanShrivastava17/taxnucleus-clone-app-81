import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import CASidebar from '../components/CASidebar';
import CAOverview from '../components/CAOverview';

const CADashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <CASidebar user={user} onLogout={logout} />
      
      <main className="dashboard-main">
        <Routes>
          <Route index element={<CAOverview user={user} />} />
          <Route path="clients" element={
            <div className="dashboard-page">
              <h1>Client Management</h1>
              <p>Client management tools coming soon...</p>
            </div>
          } />
          <Route path="tax-preparation" element={
            <div className="dashboard-page">
              <h1>Tax Preparation</h1>
              <p>Tax preparation workspace coming soon...</p>
            </div>
          } />
          <Route path="documents" element={
            <div className="dashboard-page">
              <h1>Document Center</h1>
              <p>Document management center coming soon...</p>
            </div>
          } />
          <Route path="billing" element={
            <div className="dashboard-page">
              <h1>Billing & Invoicing</h1>
              <p>Billing management coming soon...</p>
            </div>
          } />
          <Route path="reports" element={
            <div className="dashboard-page">
              <h1>Reports & Analytics</h1>
              <p>Reporting dashboard coming soon...</p>
            </div>
          } />
          <Route path="profile" element={
            <div className="dashboard-page">
              <h1>Profile Settings</h1>
              <p>Profile management coming soon...</p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
};

export default CADashboard;