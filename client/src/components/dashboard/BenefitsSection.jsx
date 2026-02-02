import React from 'react'

const benefits = [
  {
    number: '01',
    title: 'Personalized Learning Paths',
    description: 'Every plan is tailored to your specific needs, goals, and time constraints'
  },
  {
    number: '02',
    title: 'Smart Scheduling',
    description: 'Optimized daily schedules that balance learning with rest and review sessions'
  },
  {
    number: '03',
    title: 'Focus on Weak Areas',
    description: 'Extra attention on topics you struggle with for faster improvement'
  },
  {
    number: '04',
    title: 'Structured Progression',
    description: 'Start with basics and gradually move to advanced concepts at your own pace'
  }
]

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <span className="benefit-number">{benefit.number}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
