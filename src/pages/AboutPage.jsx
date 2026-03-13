import Hero from '../components/Hero/Hero'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import { coreValues } from '../data/values'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Sidhanthi Guru Yoga Academy"
        accentWords="Yoga Academy"
        subtitle="17 Years of Authentic Yoga Education and Transformation"
      />

      <SectionDivider />

      {/* Who We Are */}
      <section className="section">
        <div className="container about-intro">
          <ScrollReveal>
            <div className="about-intro__text">
              <h2>Who We Are</h2>
              <p>
                Sidhanthi Guru Yoga Academy is a registered yoga institution established in 2008 with a mission to transform lives through the authentic practice of yoga. Located in Chennai, we have spent the last 17 years creating a sanctuary where individuals from all walks of life can discover the profound benefits of yoga practice.
              </p>
              <p>
                Our Academy operates on the principle that yoga is far more than physical exercise—it is a comprehensive system for personal transformation. We offer a diverse range of programs designed to meet individuals at their current level and guide them toward holistic wellness.
              </p>
              <p>
                Under the visionary guidance of our founder Dr. D. Uma Maheswari, our Academy has helped thousands of practitioners unlock their potential and live more fulfilling lives. We remain committed to maintaining the highest standards of yoga education while honoring the ancient traditions of this timeless practice.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="about-intro__image-placeholder">
              <span>🧘‍♀️</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Vision & Mission */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Our Core Purpose</h2>
            </div>
          </ScrollReveal>
          <div className="grid-2 about-purpose">
            <ScrollReveal>
              <div className="purpose-card">
                <h3>🔭 Vision</h3>
                <p>Yoga as a tool for personal transformation, helping individuals unlock their potential and live more fulfilling lives. A core vision is to promote holistic health, encompassing physical, mental, and emotional well-being through the practice of yoga.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="purpose-card">
                <h3>🎯 Mission</h3>
                <p className="purpose-card__mission">World Transformation through Self Transformation</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Our Core Values</h2>
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {coreValues.map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="value-card">
                  <span className="value-card__icon">{value.icon}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Founder */}
      <section className="section section-alt">
        <div className="container about-founder">
          <ScrollReveal>
            <div className="about-founder__photo-placeholder">
              <span>👩‍⚕️</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="about-founder__bio">
              <h2>Meet Our Founder</h2>
              <h3>Dr. D. Uma Maheswari</h3>
              <p>
                Dr. D. Uma Maheswari is the visionary founder of Sidhanthi Guru Yoga Academy. With a deep commitment to promoting yoga as a vehicle for personal and social transformation, Dr. Uma Maheswari has dedicated 17 years to building an institution that combines ancient yogic wisdom with contemporary wellness practices.
              </p>
              <p>
                Her leadership has guided the Academy to become a trusted center for yoga education in Chennai, known for its authentic teachings, professional instruction, and student-centered approach. Dr. Uma Maheswari's expertise and passion for yoga continue to inspire both students and teachers within our community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Why Students Choose Us */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Why Students Choose Us</h2>
            </div>
          </ScrollReveal>
          <div className="differentiators">
            {[
              { title: 'Authentic Tradition with Modern Application', desc: 'We blend time-honored yogic wisdom with contemporary understanding of health and wellness.' },
              { title: 'Experienced, Qualified Instructors', desc: 'All instructors are certified and bring years of dedicated practice and teaching experience.' },
              { title: 'Community-Focused Approach', desc: 'Rather than treating yoga as a transaction, we create a supportive community where transformation is the goal.' },
              { title: 'Comprehensive Programs', desc: 'From beginner foundations to advanced practices, corporate wellness to personal transformation.' },
              { title: '17 Years of Success', desc: 'Our longevity is a testament to our commitment and the real results our students experience.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="diff-item">
                  <span className="diff-item__number">{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
