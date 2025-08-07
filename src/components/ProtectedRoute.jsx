import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [], requireAuth = true }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Check if authentication is required
  if (requireAuth && !isAuthenticated()) {
    // Redirect to login with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role-based access if roles are specified
  if (allowedRoles.length > 0 && user) {
    if (!allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard based on user role
      const redirectPath = user.role === 'client' ? '/client/dashboard' : '/ca/dashboard';
      return <Navigate to={redirectPath} replace />;
    }
  }

  // If user is authenticated but accessing wrong role route, redirect appropriately
  if (isAuthenticated() && location.pathname.startsWith('/client/') && user.role !== 'client') {
    return <Navigate to="/ca/dashboard" replace />;
  }

  if (isAuthenticated() && location.pathname.startsWith('/ca/') && user.role !== 'ca') {
    return <Navigate to="/client/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;