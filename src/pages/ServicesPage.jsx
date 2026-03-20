import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import FaqAccordion from '../components/FaqAccordion/FaqAccordion'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import { services } from '../data/services'
import { faqItems } from '../data/faq'
import './ServicesPage.css'

const serviceImages = {
  hatha: "/images/attachments/IMG_0100.JPG",
  vinyasa: "/images/attachments/IMG_0105.JPG",
  meditation: "/images/attachments (1)/IMG_0388.JPG",
  corporate: "/images/attachments (1)/IMG_0391.JPG"
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Hero
        title="Our Yoga Programs"
        accentWords="Yoga Programs"
        subtitle="Discover Your Path to Transformation"
        body="At Sidhanthi Guru Yoga Academy, we offer a diverse range of yoga programs tailored to meet you at your current level and guide you toward your wellness goals."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
      />

      <SectionDivider />

      {/* Alternating Services Layout */}
      <section className="section overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">Our Offerings</span>
              <h2>Programs Designed For You</h2>
              <p>Explore our carefully crafted programs to find the perfect fit for your journey.</p>
            </div>
          </ScrollReveal>

          <div className="services-alternating">
            {services.map((service, i) => {
              const reverse = i % 2 !== 0;
              return (
                <div key={service.id} className={`service-row ${reverse ? 'service-row--reverse' : ''}`}>
                  <ScrollReveal delay={100} className="service-row__image-col">
                    <img 
                      src={serviceImages[service.id]} 
                      alt={service.title} 
                      className="service-row__image" 
                    />
                    <div className="service-row__badge">{service.icon}</div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={200} className="service-row__content-col">
                    <div className="service-row__content">
                      <span className="service-row__level">{service.level}</span>
                      <h3>{service.title}</h3>
                      <p className="service-row__desc">{service.fullDesc}</p>
                      
                      <div className="service-row__details grid-2">
                        {service.benefits && (
                          <div className="service-list">
                            <h4>Key Benefits</h4>
                            <ul>
                              {service.benefits.slice(0, 4).map((b, idx) => (
                                <li key={idx}>✓ {b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {service.learn && service.learn.length > 0 && (
                          <div className="service-list">
                            <h4>What You'll Learn</h4>
                            <ul>
                              {service.learn.slice(0, 4).map((l, idx) => (
                                <li key={idx}>✓ {l}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      <Link to="/contact" className="btn btn-primary mt-4">
                        Book Now
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Student Journey / How It Works */}
      <section className="section bg-surface overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">The Journey</span>
              <h2>How To Get Started</h2>
              <p>Your path to wellness is simple and supported every step of the way.</p>
            </div>
          </ScrollReveal>

          <div className="journey-steps">
            {[
              { icon: '1', title: 'Connect With Us', desc: 'Reach out via our contact page to discuss your goals and experience level.' },
              { icon: '2', title: 'Choose Your Path', desc: 'We will recommend the perfect program and schedule based on your needs.' },
              { icon: '3', title: 'Attend First Class', desc: 'Arrive 15 minutes early to meet your instructor and get settled in the space.' },
              { icon: '4', title: 'Commit to Growth', desc: 'Consistency is key. Watch as your mind and body transform with regular practice.' }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="journey-card">
                  <div className="journey-card__icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">Student Stories</span>
              <h2>Transformations</h2>
            </div>
          </ScrollReveal>

          <div className="testimonials-grid">
            {[
              { quote: "The Hatha yoga classes have completely cured my chronic back pain. I've never felt stronger.", author: "Sarah M.", class: "Hatha Student" },
              { quote: "Vinyasa flow brings so much energy to my week. The instructors are incredibly supportive.", author: "James T.", class: "Vinyasa Student" },
              { quote: "Our entire office has seen a shift in morale since starting the corporate wellness program.", author: "TechCorp HR", class: "Corporate Client" }
            ].map((test, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="testimonial-card glass-card">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-quote">{test.quote}</p>
                  <div className="testimonial-author">
                    <strong>{test.author}</strong>
                    <span>{test.class}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="section section-alt overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <h2>Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-800 mx-auto">
              <FaqAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
