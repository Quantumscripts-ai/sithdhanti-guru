import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login: Just navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-page__bg">
        <div className="login-page__blob login-page__blob--1"></div>
        <div className="login-page__blob login-page__blob--2"></div>
      </div>
      
      <div className="login-container">
        <div className="login-card glass-card">
          <div className="login-header">
            <img src="/images/Sidhanthi_Guru_Logo__1_-removebg-preview.png" alt="Logo" className="login-logo" />
            <h2>Welcome Back</h2>
            <p>Sign in to access your student portal</p>
          </div>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="/contact">Contact us</a> to enroll.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
