import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ClientSidebar from '../components/ClientSidebar';
import ClientOverview from '../components/ClientOverview';

const ClientDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <ClientSidebar user={user} onLogout={logout} />
      
      <main className="dashboard-main">
        <Routes>
          <Route index element={<ClientOverview user={user} />} />
          <Route path="documents" element={
            <div className="dashboard-page">
              <h1>My Documents</h1>
              <p>Document management for clients coming soon...</p>
            </div>
          } />
          <Route path="tax-returns" element={
            <div className="dashboard-page">
              <h1>Tax Returns</h1>
              <p>Tax return management coming soon...</p>
            </div>
          } />
          <Route path="appointments" element={
            <div className="dashboard-page">
              <h1>Appointments</h1>
              <p>Appointment scheduling coming soon...</p>
            </div>
          } />
          <Route path="messages" element={
            <div className="dashboard-page">
              <h1>Messages</h1>
              <p>Secure messaging coming soon...</p>
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

export default ClientDashboard;