import { Link } from 'react-router-dom';
import { FileText, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'Tax Portal', href: '/product/tax-portal' },
    { name: 'Document Management', href: '/product/document-management' },
    { name: 'Client Communication', href: '/product/client-communication' },
    { name: 'E-Signatures', href: '/product/e-signatures' },
    { name: 'Billing & Invoicing', href: '/product/billing' }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '/resources/help' },
    { name: 'Documentation', href: '/resources/docs' },
    { name: 'API Reference', href: '/resources/api' },
    { name: 'Training Videos', href: '/resources/training' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Support', href: '/resources/support' }
  ];

  const footerStyle = {
    backgroundColor: 'var(--color-hero-bg)',
    color: 'white',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--spacing-3xl) var(--spacing-md)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: 'var(--spacing-xl)',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
    marginBottom: 'var(--spacing-lg)',
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
  };

  const descriptionStyle = {
    color: '#d1d5db',
    marginBottom: 'var(--spacing-lg)',
    lineHeight: 'var(--line-height-relaxed)',
  };

  const socialContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  };

  const socialIconStyle = {
    color: '#9ca3af',
    cursor: 'pointer',
    transition: 'color var(--transition-fast)',
  };

  const sectionTitleStyle = {
    fontSize: 'var(--font-size-lg)',
    fontWeight: '600',
    marginBottom: 'var(--spacing-lg)',
    color: 'var(--color-primary)',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkItemStyle = {
    marginBottom: 'var(--spacing-md)',
  };

  const linkStyle = {
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'color var(--transition-fast)',
  };

  const contactInfoStyle = {
    marginBottom: 'var(--spacing-md)',
    color: '#d1d5db',
  };

  const borderTopStyle = {
    borderTop: '1px solid #374151',
    marginTop: 'var(--spacing-2xl)',
    paddingTop: 'var(--spacing-xl)',
    textAlign: 'center',
  };

  const copyrightStyle = {
    color: '#9ca3af',
  };

  // Responsive grid styles
  const responsiveGridStyle = {
    ...gridStyle,
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={responsiveGridStyle}>
          {/* Company Info */}
          <div>
            <div style={logoContainerStyle}>
              <div style={logoIconStyle}>
                <FileText size={20} color="var(--color-primary-foreground)" />
              </div>
              <span style={logoTextStyle}>TAX NUCLEUS</span>
            </div>
            <p style={descriptionStyle}>
              At the nucleus of success for your tax needs. 
              Streamlining tax preparation with innovative 
              technology and exceptional service.
            </p>
            <div style={socialContainerStyle}>
              <Facebook 
                size={20} 
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              />
              <Twitter 
                size={20} 
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              />
              <Linkedin 
                size={20} 
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              />
              <Youtube 
                size={20} 
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 style={sectionTitleStyle}>Products</h3>
            <ul style={linkListStyle}>
              {productLinks.map((link, index) => (
                <li key={index} style={linkItemStyle}>
                  <Link 
                    to={link.href}
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = 'white'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={sectionTitleStyle}>Resources</h3>
            <ul style={linkListStyle}>
              {resourceLinks.map((link, index) => (
                <li key={index} style={linkItemStyle}>
                  <Link 
                    to={link.href}
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = 'white'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={sectionTitleStyle}>Contact Us</h3>
            <div>
              <p style={contactInfoStyle}>
                📧 support@taxnucleus.com
              </p>
              <p style={contactInfoStyle}>
                📞 1-800-TAX-HELP
              </p>
              <div style={contactInfoStyle}>
                <p>123 Business Ave</p>
                <p>Suite 100</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        <div style={borderTopStyle}>
          <p style={copyrightStyle}>
            © 2024 Tax Nucleus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;