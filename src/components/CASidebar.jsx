import { Link, useLocation } from 'react-router-dom';

const CASidebar = ({ user, onLogout }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/ca/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/ca/clients', label: 'Clients', icon: '👥' },
    { path: '/ca/tax-preparation', label: 'Tax Prep', icon: '📋' },
    { path: '/ca/documents', label: 'Documents', icon: '📄' },
    { path: '/ca/billing', label: 'Billing', icon: '💰' },
    { path: '/ca/reports', label: 'Reports', icon: '📈' },
    { path: '/ca/profile', label: 'Profile', icon: '👤' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
          </div>
          <span>Tax Nucleus</span>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || 'C'}
          </div>
          <div className="user-details">
            <p className="user-name">{user?.name || 'CA Professional'}</p>
            <p className="user-role">CA Portal</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={onLogout} className="logout-button">
          <span className="logout-icon">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default CASidebar;