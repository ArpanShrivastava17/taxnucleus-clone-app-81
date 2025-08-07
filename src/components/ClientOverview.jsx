import { Card } from './ui/Card';

const ClientOverview = ({ user }) => {
  const stats = [
    { label: 'Pending Documents', value: '3', color: 'orange' },
    { label: 'Completed Returns', value: '2', color: 'green' },
    { label: 'Upcoming Appointments', value: '1', color: 'blue' },
    { label: 'Messages', value: '0', color: 'purple' }
  ];

  const recentActivity = [
    { id: 1, type: 'document', message: 'W-2 form uploaded successfully', time: '2 hours ago' },
    { id: 2, type: 'appointment', message: 'Appointment scheduled for tax consultation', time: '1 day ago' },
    { id: 3, type: 'return', message: '2023 Tax Return completed', time: '3 days ago' }
  ];

  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h1>Welcome back, {user?.name || 'Client'}!</h1>
        <p>Here's what's happening with your tax matters.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card">
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
            <div className={`stat-indicator ${stat.color}`}></div>
          </Card>
        ))}
      </div>

      <div className="dashboard-content">
        <Card className="activity-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'document' && '📄'}
                  {activity.type === 'appointment' && '📅'}
                  {activity.type === 'return' && '📋'}
                </div>
                <div className="activity-content">
                  <p className="activity-message">{activity.message}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="quick-actions-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button className="action-button">
              📄 Upload Document
            </button>
            <button className="action-button">
              📅 Schedule Appointment
            </button>
            <button className="action-button">
              💬 Send Message
            </button>
            <button className="action-button">
              📋 View Tax Returns
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClientOverview;