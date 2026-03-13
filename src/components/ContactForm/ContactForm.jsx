import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const subjects = [
    'General Inquiry',
    'Class Schedule & Information',
    'Pricing & Enrollment',
    'Corporate Program Inquiry',
    'Special Events or Workshops',
    'Other',
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="contact-form__success">
          ✓ Thank you! Your message has been sent. We'll get back to you within 24 hours.
        </div>
      )}

      <div className="contact-form__group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="subject">Subject *</label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your goals or questions..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary contact-form__submit">
        Send Message
      </button>
    </form>
  )
}
