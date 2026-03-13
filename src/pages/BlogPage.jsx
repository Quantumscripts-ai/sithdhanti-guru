import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import BlogCard from '../components/BlogCard/BlogCard'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import { blogPosts, blogCategories } from '../data/blog'
import './BlogPage.css'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Hero
        title="Sidhanthi Guru Yoga Academy Blog"
        accentWords="Blog"
        subtitle="Deepen Your Knowledge, Transform Your Life"
        body="A resource for practitioners and those curious about starting their yoga journey. Insights about yoga practice, meditation techniques, wellness tips, and the philosophical foundations of yoga."
      />

      <SectionDivider />

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="blog-categories">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-category-btn${activeCategory === cat ? ' blog-category-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Blog Grid */}
          <div className="grid-3">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No posts found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
