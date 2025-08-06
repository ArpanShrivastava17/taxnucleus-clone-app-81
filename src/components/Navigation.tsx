import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText, Users, Settings, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const productItems = [
    { name: 'Tax Portal', href: '/product/tax-portal', icon: FileText },
    { name: 'Document Management', href: '/product/document-management', icon: FileText },
    { name: 'Client Communication', href: '/product/client-communication', icon: Users },
    { name: 'E-Signatures', href: '/product/e-signatures', icon: FileText },
    { name: 'Billing & Invoicing', href: '/product/billing', icon: Settings },
  ];

  const integrationItems = [
    { name: 'Schedulers', href: '/integrations/schedulers', icon: Settings },
    { name: 'Payments', href: '/integrations/payments', icon: Settings },
    { name: 'Email Services', href: '/integrations/email', icon: Settings },
    { name: 'ProConnect', href: '/integrations/proconnect', icon: Settings },
    { name: 'Drake', href: '/integrations/drake', icon: Settings },
  ];

  const resourceItems = [
    { name: 'Knowledge Hub', href: '/resources/knowledge-hub', icon: BookOpen },
    { name: 'Learning Center', href: '/resources/learning-center', icon: BookOpen },
    { name: 'Certification Program', href: '/resources/certification', icon: BookOpen },
    { name: 'Quick Start Guides', href: '/resources/guides', icon: BookOpen },
    { name: 'ROI Calculator', href: '/resources/roi-calculator', icon: Settings },
    { name: 'Community & Directory', href: '/resources/community', icon: Users },
  ];

  const renderDropdown = (items: any[], isVisible: boolean) => (
    <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-border transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="p-2">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
          >
            <item.icon className="w-4 h-4 text-primary" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TAX NUCLEUS</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              HOME
            </Link>

            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('product')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                PRODUCT
                <ChevronDown className="w-4 h-4" />
              </button>
              {renderDropdown(productItems, hoveredMenu === 'product')}
            </div>

            {/* Integrations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('integrations')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                INTEGRATIONS
                <ChevronDown className="w-4 h-4" />
              </button>
              {renderDropdown(integrationItems, hoveredMenu === 'integrations')}
            </div>

            <Link to="/price" className="text-foreground hover:text-primary transition-colors">
              PRICE
            </Link>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('resources')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                RESOURCES
                <ChevronDown className="w-4 h-4" />
              </button>
              {renderDropdown(resourceItems, hoveredMenu === 'resources')}
            </div>

            <Link to="/the-nucleus" className="text-foreground hover:text-primary transition-colors">
              THE NUCLEUS
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-foreground hover:text-primary"
            >
              LOG IN
            </Button>
            <Button 
              variant="hero"
              onClick={() => navigate('/signup')}
            >
              DEMO
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;