import Hero from '../components/Hero/Hero'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import FaqAccordion from '../components/FaqAccordion/FaqAccordion'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import { services } from '../data/services'
import { faqItems } from '../data/faq'

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Yoga Programs"
        accentWords="Yoga Programs"
        subtitle="Discover Your Path to Transformation"
        body="At Sidhanthi Guru Yoga Academy, we offer a diverse range of yoga programs tailored to meet you at your current level and guide you toward your wellness goals."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
      />

      <SectionDivider />

      {/* Program Details */}
      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <ServiceCard service={service} compact={false} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <FaqAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
