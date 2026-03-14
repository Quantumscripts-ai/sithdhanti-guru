import Hero from '../components/Hero/Hero'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import { coreValues } from '../data/values'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <Hero
        title="About Sidhanthi Guru Yoga Academy"
        accentWords="Yoga Academy"
        subtitle="17 Years of Authentic Yoga Education and Transformation"
      />

      <SectionDivider />

      {/* Storyteller Intro */}
      <section className="section overflow-hidden">
        <div className="container about-intro">
          <ScrollReveal>
            <div className="about-intro__text">
              <span className="section-subtitle">Our Story</span>
              <h2>A Legacy of Wellness & Inner Peace</h2>
              <p>
                Sidhanthi Guru Yoga Academy is a registered yoga institution established in 2008 with a mission to transform lives through the authentic practice of yoga. Located in Chennai, we have spent the last 17 years creating a sanctuary where individuals from all walks of life can discover the profound benefits of yoga practice.
              </p>
              <p>
                Our Academy operates on the principle that yoga is far more than physical exercise—it is a comprehensive system for personal transformation. We offer a diverse range of programs designed to meet individuals at their current level and guide them toward holistic wellness.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="about-intro__visuals">
              <div className="about-intro__bg-blob"></div>
              <img src="/images/yoga-hero-center.png" alt="Yoga practice" className="about-intro__img-main" />
              <img src="/images/yoga-hero-left.png" alt="Meditation" className="about-intro__img-sub" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-surface">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Our Core Purpose</h2>
            </div>
          </ScrollReveal>
          <div className="grid-2 about-purpose">
            <ScrollReveal>
              <div className="glass-card purpose-card">
                <div className="purpose-card__icon">🔭</div>
                <h3>Vision</h3>
                <p>Yoga as a tool for personal transformation, helping individuals unlock their potential and live more fulfilling lives. A core vision is to promote holistic health, encompassing physical, mental, and emotional well-being through the practice of yoga.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card purpose-card purpose-card--highlight">
                <div className="purpose-card__icon">🎯</div>
                <h3>Mission</h3>
                <p className="purpose-card__mission">"World Transformation through Self Transformation"</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-subtitle">What Guides Us</span>
              <h2>Our Core Values</h2>
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {coreValues.map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="modern-value-card">
                  <div className="modern-value-card__border"></div>
                  <div className="modern-value-card__content">
                    <span className="modern-value-card__icon">{value.icon}</span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Editorial */}
      <section className="section bg-surface overflow-hidden">
        <div className="container founder-editorial">
          <ScrollReveal>
            <div className="founder-editorial__image-wrapper">
              <div className="founder-editorial__decorative-element"></div>
              <img src="/images/yoga-hero-right.png" alt="Dr. D. Uma Maheswari" className="founder-editorial__image" />
              <div className="founder-editorial__badge">
                <span className="badge-years">17+</span>
                <span className="badge-text">Years of<br/>Experience</span>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="founder-editorial__content">
            <ScrollReveal delay={150}>
              <span className="section-subtitle">Meet Our Founder</span>
              <h2>Dr. D. Uma Maheswari</h2>
              <div className="founder-editorial__divider"></div>
              <p className="founder-editorial__lead">
                A visionary leader dedicated to promoting yoga as a vehicle for personal and social transformation.
              </p>
              <p>
                Dr. D. Uma Maheswari has dedicated 17 years to building an institution that combines ancient yogic wisdom with contemporary wellness practices. Her leadership has guided the Academy to become a trusted center for yoga education in Chennai, known for its authentic teachings, professional instruction, and student-centered approach. 
              </p>
              <p>
                Her expertise and passion for yoga continue to inspire both students and teachers within our community, fostering an environment where deep, lasting transformation is possible.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section pb-large">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <h2>Why Students Choose Us</h2>
              <p>Experience the Sidhanthi Guru difference.</p>
            </div>
          </ScrollReveal>
          
          <div className="differentiators-modern">
            {[
              { title: 'Authentic Tradition', desc: 'We blend time-honored yogic wisdom with contemporary understanding of health and wellness.' },
              { title: 'Expert Instructors', desc: 'Certified professionals bringing years of dedicated practice and teaching experience to every class.' },
              { title: 'Supportive Community', desc: 'More than a studio—we are a community where your personal transformation is our shared priority.' },
              { title: '17 Years of Success', desc: 'Our longevity is a testament to our profound commitment and the real, lasting results our students experience.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="diff-card-modern">
                  <div className="diff-card-modern__number">0{i + 1}</div>
                  <div className="diff-card-modern__content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
