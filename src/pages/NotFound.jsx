import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  };

  const contentStyle = {
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: 'var(--font-size-4xl)',
    fontWeight: 'bold',
    marginBottom: 'var(--spacing-md)',
  };

  const messageStyle = {
    fontSize: 'var(--font-size-xl)',
    color: '#6b7280',
    marginBottom: 'var(--spacing-md)',
  };

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>404</h1>
        <p style={messageStyle}>Oops! Page not found</p>
        <a href="/" style={linkStyle}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;