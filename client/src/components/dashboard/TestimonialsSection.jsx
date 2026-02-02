import React from 'react'

const testimonials = [
  {
    stars: 5,
    text: 'This app completely transformed how I study. The AI-generated plan was perfect for my schedule and learning style!',
    author: 'Sarah Johnson',
    role: 'Computer Science Student'
  },
  {
    stars: 5,
    text: 'I went from struggling with data structures to acing my exams. The structured approach really works!',
    author: 'Michael Chen',
    role: 'Software Engineering Student'
  },
  {
    stars: 5,
    text: 'The focus on my weak areas helped me improve quickly. Highly recommend for anyone preparing for interviews!',
    author: 'Emily Rodriguez',
    role: 'Job Seeker'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">{'⭐'.repeat(testimonial.stars)}</div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
