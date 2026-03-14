import { Link } from 'react-router-dom'
import './DashboardPage.css'

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar glass-card">
        <div className="sidebar-header">
          <Link to="/">
            <img src="/images/Sidhanthi_Guru_Logo__1_-removebg-preview.png" alt="Logo" className="sidebar-logo" />
          </Link>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active">
            <span className="icon">📊</span> Dashboard
          </a>
          <a href="#" className="sidebar-link">
            <span className="icon">📅</span> My Schedule
          </a>
          <a href="#" className="sidebar-link">
            <span className="icon">🧘‍♀️</span> Programs
          </a>
          <a href="#" className="sidebar-link">
            <span className="icon">⚙️</span> Settings
          </a>
        </nav>
        
        <div className="sidebar-footer">
          <Link to="/" className="sidebar-logout">
            <span className="icon">🚪</span> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Hello, Alex</h1>
            <p className="text-muted">Here is what's happening with your practice today.</p>
          </div>
          <div className="user-profile-badge">
            <div className="avatar">A</div>
          </div>
        </header>
        
        <div className="dashboard-content">
          {/* Stats Row */}
          <div className="dashboard-stats grid-3">
            <div className="stat-card glass-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <p>Current Streak</p>
                <h3>5 Days</h3>
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-info">
                <p>Hours Practiced</p>
                <h3>24.5 Hrs</h3>
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <p>Level</p>
                <h3>Intermediate</h3>
              </div>
            </div>
          </div>
          
          <div className="dashboard-grid grid-2">
            {/* Upcoming Classes */}
            <div className="dashboard-panel glass-card">
              <div className="panel-header">
                <h2>Upcoming Classes</h2>
                <button className="btn-link">View All</button>
              </div>
              <div className="class-list">
                <div className="class-item">
                  <div className="class-date">
                    <span className="day">Mon</span>
                    <span className="date">15</span>
                  </div>
                  <div className="class-details">
                    <h4>Vinyasa Flow</h4>
                    <p>6:00 PM • Studio A</p>
                  </div>
                </div>
                <div className="class-item">
                  <div className="class-date">
                    <span className="day">Wed</span>
                    <span className="date">17</span>
                  </div>
                  <div className="class-details">
                    <h4>Meditation</h4>
                    <p>7:00 AM • Virtual</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Progress */}
            <div className="dashboard-panel glass-card">
              <div className="panel-header">
                <h2>Recent Progress</h2>
              </div>
              <div className="progress-list">
                <div className="progress-item">
                  <div className="progress-icon">✅</div>
                  <div className="progress-details">
                    <h4>Completed Hatha Basics</h4>
                    <p>Yesterday</p>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-icon">🎯</div>
                  <div className="progress-details">
                    <h4>New Milestone: 10 Classes</h4>
                    <p>Last Week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
