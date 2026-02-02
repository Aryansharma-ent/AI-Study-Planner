import React from 'react'
import Prism from '../../pages/Prism'

const HeroSection = ({ onGetStarted }) => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 76px)', position: 'relative' }}>
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1.5}
        noise={0.1}
        glow={1.5}
        bloom={1}
        transparent={false}
      />
      
      <div className="dashboard">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Master Your Studies,<br />
            Achieve Your Goals
          </h1>
          <p className="hero-subtitle">
            Create personalized study plans powered by smart scheduling
          </p>
          
          <button 
            className="cta-button"
            onClick={onGetStarted}
          >
            Get Started
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
