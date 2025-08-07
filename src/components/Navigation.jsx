import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './ui/Button';
import { ChevronDown, FileText, Users, Settings, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

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

  const renderDropdown = (items, isVisible) => (
    <div className={`nav-dropdown ${isVisible ? 'visible' : 'hidden'}`}>
      <div style={{ padding: 'var(--spacing-sm)' }}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="nav-dropdown-item"
          >
            <item.icon />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  const navStyle = {
    backgroundColor: 'var(--color-background)',
    borderBottom: '1px solid var(--color-border)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--spacing-md)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
    textDecoration: 'none',
    color: 'inherit',
  };

  const logoIconStyle = {
    width: '2rem',
    height: '2rem',
    backgroundColor: 'var(--color-primary)',
    borderRadius: 'var(--radius)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const logoTextStyle = {
    fontSize: 'var(--font-size-xl)',
    fontWeight: 'bold',
    color: 'var(--color-foreground)',
  };

  const navLinksStyle = {
    display: 'none',
    alignItems: 'center',
    gap: 'var(--spacing-xl)',
  };

  const linkStyle = {
    color: 'var(--color-foreground)',
    textDecoration: 'none',
    transition: 'color var(--transition-fast)',
    cursor: 'pointer',
  };

  const dropdownStyle = {
    position: 'relative',
  };

  const dropdownButtonStyle = {
    ...linkStyle,
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    background: 'none',
    border: 'none',
    fontSize: 'inherit',
  };

  const authButtonsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          {/* Logo */}
          <Link to="/" style={logoStyle}>
            <div style={logoIconStyle}>
              <FileText size={20} color="var(--color-primary-foreground)" />
            </div>
            <span style={logoTextStyle}>TAX NUCLEUS</span>
          </Link>

          {/* Navigation Links */}
          <div style={{ ...navLinksStyle, '@media (min-width: 768px)': { display: 'flex' } }}>
            <Link to="/" style={linkStyle}>
              HOME
            </Link>

            {/* Product Dropdown */}
            <div 
              style={dropdownStyle}
              onMouseEnter={() => setHoveredMenu('product')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button style={dropdownButtonStyle}>
                PRODUCT
                <ChevronDown size={16} />
              </button>
              {renderDropdown(productItems, hoveredMenu === 'product')}
            </div>

            {/* Integrations Dropdown */}
            <div 
              style={dropdownStyle}
              onMouseEnter={() => setHoveredMenu('integrations')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button style={dropdownButtonStyle}>
                INTEGRATIONS
                <ChevronDown size={16} />
              </button>
              {renderDropdown(integrationItems, hoveredMenu === 'integrations')}
            </div>

            <Link to="/price" style={linkStyle}>
              PRICE
            </Link>

            {/* Resources Dropdown */}
            <div 
              style={dropdownStyle}
              onMouseEnter={() => setHoveredMenu('resources')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button style={dropdownButtonStyle}>
                RESOURCES
                <ChevronDown size={16} />
              </button>
              {renderDropdown(resourceItems, hoveredMenu === 'resources')}
            </div>

            <Link to="/the-nucleus" style={linkStyle}>
              THE NUCLEUS
            </Link>
          </div>

          {/* Auth Buttons */}
          <div style={authButtonsStyle}>
            {isAuthenticated() ? (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate(user.role === 'client' ? '/client/dashboard' : '/ca/dashboard')}
                >
                  DASHBOARD
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={logout}
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/login')}
                >
                  LOG IN
                </Button>
                <Button 
                  variant="hero"
                  onClick={() => navigate('/signup')}
                >
                  DEMO
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;