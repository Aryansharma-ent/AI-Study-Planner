import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { FaRobot } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"><FaRobot/></span>
          Study Plan Generator
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/GeneratePlan" 
              className={`navbar-link ${location.pathname === '/GeneratePlan' ? 'active' : ''}`}
            >
              Generate Plan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
