import React from 'react'

const CTASection = ({ onGeneratePlan }) => {
  return (
    <section className="cta-section">
      <h2>Ready to Start Your Learning Journey?</h2>
      <p>Create your personalized study plan in minutes</p>
      <button 
        className="cta-button-large"
        onClick={onGeneratePlan}
      >
        Generate Your Plan Now
        <span className="arrow">→</span>
      </button>
    </section>
  )
}

export default CTASection
