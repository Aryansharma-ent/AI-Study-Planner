import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ResultPage.css'
import { useParams } from 'react-router-dom'
import { getPlan } from '../api/PlanApi'

const ResultPage = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const [plan,setPlan] = useState(null);
  const [loading,setLoading] = useState(true)
  
  
  
  useEffect(()=>{
    async function fetchdata(){
    try {
       const res = await getPlan(id);
       setPlan(res.data); 
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  fetchdata()
  },[])




  if(loading) return <p>Loading......</p>
  if(!plan) return <p>Plan not found!</p>
  
  return (
    <div className="result-page">
      <div className="result-container">
        {/* Header Section */}
        <div className="result-header">
          <h1 className="result-title">{plan.title}</h1>
          <div className="plan-stats">
            <div className="stat-item">
              <span className="stat-label">Duration</span>
              <span className="stat-value">{plan.durationDays} Days</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Daily Time</span>
              <span className="stat-value">{plan.hoursperday} Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Level</span>
              <span className="stat-value">{plan.level}</span>
            </div>
          </div>
        </div>

        {/* Weekly Plans */}
        {plan.generatedPlan?.weeklyPlan?.map((week) => (
          <div key={week.week} className="week-section">
            <h2 className="week-title">Week {week.week}</h2>
            <div className="days-grid">
              {week.days.map((day, index) => (
                <div key={index} className={`day-card ${day.day.includes('Rest') ? 'rest-day' : ''}`}>
                  <div className="day-header">
                    <h3 className="day-number">{day.day}</h3>
                    <span className="day-hours">{day.hours}h</span>
                  </div>
                  <h4 className="day-topic">{day.topic}</h4>
                  <ul className="day-subtopics">
                    {day.subtopics.map((subtopic, idx) => (
                      <li key={idx}>{subtopic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="result-actions">
          <button className="action-btn secondary" onClick={() => navigate('/GeneratePlan')}>
            Create New Plan
          </button>
          <button className="action-btn primary">
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultPage
