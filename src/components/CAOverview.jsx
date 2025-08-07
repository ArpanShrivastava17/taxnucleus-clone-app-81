import { Card } from './ui/Card';

const CAOverview = ({ user }) => {
  const stats = [
    { label: 'Active Clients', value: '24', color: 'blue' },
    { label: 'Pending Returns', value: '8', color: 'orange' },
    { label: 'Completed This Month', value: '15', color: 'green' },
    { label: 'Revenue This Month', value: '$12,500', color: 'purple' }
  ];

  const recentActivity = [
    { id: 1, type: 'client', message: 'New client John Doe registered', time: '1 hour ago' },
    { id: 2, type: 'return', message: 'Tax return completed for Sarah Smith', time: '3 hours ago' },
    { id: 3, type: 'appointment', message: 'Appointment scheduled with Mike Johnson', time: '5 hours ago' },
    { id: 4, type: 'document', message: 'Documents received from Lisa Brown', time: '1 day ago' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Review tax documents for ABC Corp', priority: 'high', due: 'Today' },
    { id: 2, task: 'Client consultation with Jane Wilson', priority: 'medium', due: 'Tomorrow' },
    { id: 3, task: 'Quarterly report preparation', priority: 'low', due: 'This Week' }
  ];

  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h1>Welcome back, {user?.name || 'CA Professional'}!</h1>
        <p>Here's your practice overview for today.</p>
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
                  {activity.type === 'client' && '👤'}
                  {activity.type === 'return' && '📋'}
                  {activity.type === 'appointment' && '📅'}
                  {activity.type === 'document' && '📄'}
                </div>
                <div className="activity-content">
                  <p className="activity-message">{activity.message}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="tasks-card">
          <h2>Upcoming Tasks</h2>
          <div className="tasks-list">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className={`task-priority ${task.priority}`}></div>
                <div className="task-content">
                  <p className="task-description">{task.task}</p>
                  <span className="task-due">Due: {task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CAOverview;