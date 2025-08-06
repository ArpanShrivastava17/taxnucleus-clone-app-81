import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardOverview } from '@/components/DashboardOverview';
import { DashboardInbox } from '@/components/DashboardInbox';
import { DashboardInvoices } from '@/components/DashboardInvoices';
import { DashboardChat } from '@/components/DashboardChat';
import { DashboardProfile } from '@/components/DashboardProfile';
import { DashboardClients } from '@/components/DashboardClients';
import { DashboardFiles } from '@/components/DashboardFiles';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of Tax Nucleus.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar onLogout={handleLogout} />
      
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<DashboardOverview />} />
          <Route path="inbox" element={<DashboardInbox />} />
          <Route path="invoices" element={<DashboardInvoices />} />
          <Route path="chat" element={<DashboardChat />} />
          <Route path="clients" element={<DashboardClients />} />
          <Route path="files" element={<DashboardFiles />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;