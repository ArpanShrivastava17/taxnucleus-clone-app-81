import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          
          {/* Product Routes */}
          <Route path="/product/tax-portal" element={<PlaceholderPage title="Tax Portal" />} />
          <Route path="/product/document-management" element={<PlaceholderPage title="Document Management" />} />
          <Route path="/product/client-communication" element={<PlaceholderPage title="Client Communication" />} />
          <Route path="/product/e-signatures" element={<PlaceholderPage title="E-Signatures" />} />
          <Route path="/product/billing" element={<PlaceholderPage title="Billing & Invoicing" />} />
          
          {/* Integration Routes */}
          <Route path="/integrations/schedulers" element={<PlaceholderPage title="Schedulers Integration" />} />
          <Route path="/integrations/payments" element={<PlaceholderPage title="Payments Integration" />} />
          <Route path="/integrations/email" element={<PlaceholderPage title="Email Services Integration" />} />
          <Route path="/integrations/proconnect" element={<PlaceholderPage title="ProConnect Integration" />} />
          <Route path="/integrations/drake" element={<PlaceholderPage title="Drake Integration" />} />
          
          {/* Resource Routes */}
          <Route path="/resources/knowledge-hub" element={<PlaceholderPage title="Knowledge Hub" />} />
          <Route path="/resources/learning-center" element={<PlaceholderPage title="Learning Center" />} />
          <Route path="/resources/certification" element={<PlaceholderPage title="Certification Program" />} />
          <Route path="/resources/guides" element={<PlaceholderPage title="Quick Start Guides" />} />
          <Route path="/resources/roi-calculator" element={<PlaceholderPage title="ROI Calculator" />} />
          <Route path="/resources/community" element={<PlaceholderPage title="Community & Directory" />} />
          <Route path="/resources/help" element={<PlaceholderPage title="Help Center" />} />
          <Route path="/resources/docs" element={<PlaceholderPage title="Documentation" />} />
          <Route path="/resources/api" element={<PlaceholderPage title="API Reference" />} />
          <Route path="/resources/training" element={<PlaceholderPage title="Training Videos" />} />
          <Route path="/resources/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/resources/support" element={<PlaceholderPage title="Support" />} />
          
          {/* Other Routes */}
          <Route path="/price" element={<PlaceholderPage title="Pricing" />} />
          <Route path="/the-nucleus" element={<PlaceholderPage title="The Nucleus" />} />
          <Route path="/demo" element={<PlaceholderPage title="Demo" />} />
          <Route path="/forgot-password" element={<PlaceholderPage title="Forgot Password" />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
