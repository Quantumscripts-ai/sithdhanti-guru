import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  PlusCircle, 
  MessageSquare, 
  LogOut, 
  ExternalLink, 
  Layout, 
  Clock, 
  CheckCircle, 
  Users 
} from 'lucide-react'
import BlogCard from '../components/BlogCard/BlogCard'
import './DashboardPage.css'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('blogs')

  const stats = [
    { label: 'Total Blogs', value: '12', icon: <BookOpen />, color: '#6366f1' },
    { label: 'Pending Posts', value: '3', icon: <Clock />, color: '#f59e0b' },
    { label: 'Confirmed', value: '9', icon: <CheckCircle />, color: '#10b981' },
    { label: 'Total Inquiries', value: '45', icon: <MessageSquare />, color: '#3b82f6' },
    { label: 'Pending Replies', value: '8', icon: <Clock />, color: '#f59e0b' },
    { label: 'System Users', value: '2', icon: <Users />, color: '#a855f7' },
  ]

  const dummyPosts = [
    {
      id: 1,
      title: "The Power of Breath: Pranayama Basics",
      category: "Wellness",
      date: "March 15, 2026",
      author: "Guru Ji",
      excerpt: "Deep breathing is more than just oxygen intake. It's the bridge between body and mind..."
    },
    {
      id: 2,
      title: "Morning Flow for Energy",
      category: "Yoga",
      date: "March 12, 2026",
      author: "Anjali Sharma",
      excerpt: "Start your day with these 5 essential asanas to wake up your nervous system."
    }
  ]

  const dummySubmissions = [
    { id: 1, name: "Rahul S.", email: "rahul@example.com", date: "2 mins ago", subject: "General Inquiry" },
    { id: 2, name: "Priya M.", email: "priya@example.com", date: "1 hour ago", subject: "Pricing" },
    { id: 3, name: "Amit K.", email: "amit@example.com", date: "3 hours ago", subject: "Schedule" },
  ]

  return (
    <div className="dashboard-layout dark-theme">
      {/* Top Navigation */}
      <nav className="dashboard-top-nav">
        <div className="nav-left">
          <div className="brand-info">
            <h2>Sidhanthi Guru</h2>
            <div className="user-meta">
              <span>admin@sidhanthi.guru</span>
              <span className="badge">admin</span>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <Link to="/" className="nav-btn secondary">
            <ExternalLink size={18} /> Back to Site
          </Link>
          <Link to="/" className="nav-btn danger">
            <LogOut size={18} /> Logout
          </Link>
        </div>
      </nav>

      <div className="dashboard-container">
        {/* Overview Header */}
        <section className="dashboard-section">
          <h3 className="section-label">OVERVIEW</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Tabs */}
        <section className="dashboard-main-content">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'blogs' ? 'active' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              <BookOpen size={18} /> Blogs ({dummyPosts.length})
            </button>
            <button 
              className={`tab-btn ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => setActiveTab('create')}
            >
              <PlusCircle size={18} /> Create Blog
            </button>
            <button 
              className={`tab-btn ${activeTab === 'forms' ? 'active' : ''}`}
              onClick={() => setActiveTab('forms')}
            >
              <MessageSquare size={18} /> Form Submissions ({dummySubmissions.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'blogs' && (
              <div className="blogs-tab fade-in">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Post Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyPosts.map(post => (
                        <tr key={post.id}>
                          <td className="font-medium">{post.title}</td>
                          <td><span className="table-badge">{post.category}</span></td>
                          <td>{post.date}</td>
                          <td>{post.author}</td>
                          <td>
                            <div className="action-btns">
                              <button className="icon-btn edit">✎</button>
                              <button className="icon-btn delete">🗑</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'create' && (
              <div className="create-tab fade-in">
                <div className="create-form-wrapper">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Blog Title</label>
                      <input type="text" placeholder="Enter post title..." />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <select>
                        <option>Wellness</option>
                        <option>Yoga</option>
                        <option>Meditation</option>
                        <option>Nutrition</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Excerpt</label>
                    <textarea rows="3" placeholder="Short description..."></textarea>
                  </div>
                  <div className="form-group">
                    <label>Content</label>
                    <textarea rows="10" placeholder="Write your blog post content here..."></textarea>
                  </div>
                  <button className="btn btn-primary submit-btn">Publish Post</button>
                </div>
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="forms-tab fade-in">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Sender</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Time</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummySubmissions.map(sub => (
                        <tr key={sub.id}>
                          <td className="font-medium">{sub.name}</td>
                          <td>{sub.email}</td>
                          <td>{sub.subject}</td>
                          <td>{sub.date}</td>
                          <td>
                            <button className="btn-small">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
