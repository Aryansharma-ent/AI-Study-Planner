import React from 'react'
import { FaPencilAlt, FaRobot, FaChartBar } from 'react-icons/fa'

const features = [
  {
    icon: <FaPencilAlt />,
    title: 'Input Your Goals',
    description: 'Tell us what you want to learn, your available time, and your current skill level'
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Planning',
    description: 'Our smart AI analyzes your inputs and creates a personalized study schedule'
  },
  {
    icon: <FaChartBar />,
    title: 'Track Progress',
    description: 'Follow your custom plan day by day and achieve your learning goals efficiently'
  }
]

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">How It Works</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
