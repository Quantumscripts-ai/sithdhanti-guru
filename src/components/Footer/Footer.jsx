import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="footer">
      <motion.div 
        className="container footer__inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="footer__brand" variants={itemVariants}>
          <h3><span className="footer__logo-icon">🧘</span> Sidhanthi Guru Yoga</h3>
          <p>Inspiring wellness since 2008. Join our community and discover your inner strength.</p>
          <div className="footer__location">
             <p>📍 Chennai, Tamil Nadu, India</p>
          </div>
        </motion.div>

        <motion.div className="footer__links" variants={itemVariants}>
          <h4>Explore</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="footer__contact" variants={itemVariants}>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <Link to="/contact" style={{ color: '#166534', fontWeight: '600' }}>Book a Class →</Link>
            </li>
            <li>
              <a href="mailto:sidhanthiguru@gmail.com">sidhanthiguru@gmail.com</a>
            </li>
            <li className="footer__social">
              {['FB', 'IG', 'LI', 'YT'].map((platform) => (
                <motion.a 
                  key={platform}
                  href="#" 
                  aria-label={platform}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {platform}
                </motion.a>
              ))}
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        className="footer__bottom container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© 2025 Sidhanthi Guru Yoga Academy. Crafted with ❤️ for well-being.</p>
      </motion.div>
    </footer>
  )
}
