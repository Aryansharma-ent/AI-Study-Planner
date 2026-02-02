import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/DashBoard.css'
import HeroSection from '../components/dashboard/HeroSection'
import FeaturesSection from '../components/dashboard/FeaturesSection'
import BenefitsSection from '../components/dashboard/BenefitsSection'
import TestimonialsSection from '../components/dashboard/TestimonialsSection'
import CTASection from '../components/dashboard/CTASection'

const DashBoard = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/GeneratePlan')
  }

  return (
    <>
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection onGeneratePlan={handleGetStarted} />
    </>
  )
}

export default DashBoard
