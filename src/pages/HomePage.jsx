import Hero from '../components/Hero/Hero'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import StatsRow from '../components/StatsRow/StatsRow'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import FocusCards from '../components/FocusCards/FocusCards'
import StudioFeatures from '../components/StudioFeatures/StudioFeatures'
import InfinityMarquee from '../components/InfinityMarquee/InfinityMarquee'
import AboutSection from '../components/AboutSection/AboutSection'
import FAQSection from '../components/FAQSection/FAQSection'
import { services } from '../data/services'

const heroImages = [
  { src: '/images/yoga-hero-left.png', alt: 'Yoga warrior pose in studio' },
  { src: '/images/yoga-hero-center.png', alt: 'Modern yoga studio interior' },
  { src: '/images/yoga-hero-right.png', alt: 'Yoga instructor coaching student' },
]

const focusCardsData = [
  {
    title: services[0].title,
    description: services[0].shortDesc,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop", // Hatha yoga pose
  },
  {
    title: services[1].title,
    description: services[1].shortDesc,
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop", // Vinyasa flow
  },
  {
    title: services[2].title,
    description: services[2].shortDesc,
    src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop", // Meditation / Mindfulness
  },
  {
    title: services[3].title,
    description: services[3].shortDesc,
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop", // Corporate Yoga
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        rating={{ score: '4.9/5', label: 'with 300+ reviews' }}
        title="Transform Your Life Through the Ancient Wisdom of Yoga"
        accentWords="Wisdom of Yoga"
        subtitle="Feel strong, move freely, and restore balance with Sidhanthi Guru Yoga Academy!"
        primaryCta={{ label: 'Book a Class', to: '/contact' }}
        images={heroImages}
      >
        <div className="hero__badge">
          <span>🎯 17+ Years</span>
          <span>🧘 1000+ Students</span>
          <span>📜 Reg. No. 1597</span>
        </div>
      </Hero>

      <SectionDivider />

      {/* Service Highlights */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Discover Our Transformative Yoga Programs</h2>
              <p>Discover the transformative power of yoga through our comprehensive programs designed for every level of practitioner.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <FocusCards cards={focusCardsData} />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Studio Features */}
      <StudioFeatures />

      {/* Infinity Marquee - integrated with 3rd section */}
      <section style={{ paddingBottom: '4rem', overflow: 'hidden' }}>
        <ScrollReveal delay={200}>
          <InfinityMarquee />
        </ScrollReveal>
      </section>

      <SectionDivider />

      {/* About Us & Location */}
      <AboutSection />

      <SectionDivider />

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}
