
import { Card } from './ui/Card';
import Progress from './ui/Progress';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Clients',
      value: '1,234',
      change: '+12.5%',
      changeType: 'positive'
    },
    {
      title: 'Active Cases',
      value: '89',
      change: '+8.2%',
      changeType: 'positive'
    },
    {
      title: 'Revenue This Month',
      value: '$54,320',
      change: '+15.3%',
      changeType: 'positive'
    },
    {
      title: 'Pending Tasks',
      value: '23',
      change: '-5.1%',
      changeType: 'negative'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'New client registration',
      description: 'John Smith registered for tax consultation',
      time: '2 hours ago',
      type: 'client'
    },
    {
      id: 2,
      title: 'Invoice sent',
      description: 'Invoice #1234 sent to ABC Corp',
      time: '4 hours ago',
      type: 'invoice'
    },
    {
      id: 3,
      title: 'Document uploaded',
      description: 'Tax return filed for XYZ Company',
      time: '6 hours ago',
      type: 'document'
    },
    {
      id: 4,
      title: 'Payment received',
      description: '$2,500 payment from DEF LLC',
      time: '1 day ago',
      type: 'payment'
    }
  ];

  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your practice.</p>
        </div>
        <div className="dashboard-actions">
          <button className="button button-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Report
          </button>
          <button className="button button-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add New Client
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card">
            <div className="stat-content">
              <div className="stat-header">
                <h3>{stat.title}</h3>
                <span className={`stat-change ${stat.changeType}`}>
                  {stat.change}
                </span>
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="main-grid">
        {/* Recent Activity */}
        <Card className="activity-card">
          <div className="card-header">
            <h3>Recent Activity</h3>
            <button className="button button-ghost button-sm">View All</button>
          </div>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'client' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                  {activity.type === 'invoice' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  )}
                  {activity.type === 'document' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                  )}
                  {activity.type === 'payment' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  )}
                </div>
                <div className="activity-content">
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-description">{activity.description}</div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="actions-card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <button className="quick-action-item">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="action-content">
                <div className="action-title">Add Client</div>
                <div className="action-description">Register a new client</div>
              </div>
            </button>
            
            <button className="quick-action-item">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
              </div>
              <div className="action-content">
                <div className="action-title">Create Invoice</div>
                <div className="action-description">Generate a new invoice</div>
              </div>
            </button>
            
            <button className="quick-action-item">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17,8 12,3 7,8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
              <div className="action-content">
                <div className="action-title">Upload Document</div>
                <div className="action-description">Upload tax documents</div>
              </div>
            </button>
            
            <button className="quick-action-item">
              <div className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="action-content">
                <div className="action-title">Send Message</div>
                <div className="action-description">Contact a client</div>
              </div>
            </button>
          </div>
        </Card>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <Card className="progress-card">
          <div className="card-header">
            <h3>Monthly Progress</h3>
          </div>
          <div className="progress-content">
            <div className="progress-item">
              <div className="progress-label">
                <span>Tax Returns Filed</span>
                <span>67/100</span>
              </div>
              <Progress value={67} />
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>Client Consultations</span>
                <span>45/60</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>Revenue Goal</span>
                <span>$34K/$50K</span>
              </div>
              <Progress value={68} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
