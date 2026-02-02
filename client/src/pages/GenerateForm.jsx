import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/GenerateForm.css'
import { postPlan } from '../api/PlanApi'
import { FaSpinner } from 'react-icons/fa'


const GenerateForm = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState('');
  const [time,setTime] = useState('');
  const [duration,setDuration] = useState('');
  const [subjects,setSubjects] = useState('');
  const [weak,setWeak] = useState('');
  const [currlevel,setCurrlevel] = useState("Beginner");
  const [loading,setLoading] = useState(false);


  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postPlan({
        title,
        hoursperday : time,
        durationDays : duration,
        subjects : subjects.split(',').map(s => s.trim()).filter(s => s),
        weakAreas : weak ? weak.split(',').map(w => w.trim()).filter(w => w) : [],
         level  : currlevel
      })

      const id = res?.data?._id; 
    navigate(`/result/${id}`);
    } catch (error) {
       console.error("Form submission error:", error.response?.data || error.message)
       alert("Failed to generate plan: " + (error.response?.data?.message || error.message))
    }finally{
      setLoading(false)
    }
  }

  if(loading) {
    return (
      <div className="generate-form-page">
        <div className="loading-spinner-container">
          <FaSpinner className="loading-spinner" />
          <p>Generating your personalized study plan...</p>
        </div>
      </div>
    )
  }
  

  return (
    <div className="generate-form-page">
      <div className="form-container">
        <h1 className="form-title">Create Your Study Plan</h1>
        <p className="form-subtitle">Fill in the details to generate a personalized study schedule</p>
        
        <form onSubmit={handleSubmit} className="study-form">
          <div className="form-group">
            <label htmlFor="planTitle">Plan Title / Goal</label>
            <input
              type="text"
              id="planTitle"
              name="planTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Master Data Structures & Algorithms"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="hoursPerDay">Available Time Per Day (hours)</label>
              <input
                type="number"
                id="hoursPerDay"
                name="hoursPerDay"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g., 4"
                min="1"
                max="24"
                step="0.5"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration (days)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 30"
                min="1"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subjects">Subjects / Topics</label>
            <textarea
              id="subjects"
              name="subjects"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              placeholder="Enter subjects separated by commas (e.g., Arrays, Linked Lists, Trees, Graphs)"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="weakAreas">Weak Areas (Tags)</label>
            <textarea
              id="weakAreas"
              name="weakAreas"
              value={weak}
              onChange={(e) => setWeak(e.target.value)}
              placeholder="Enter weak areas separated by commas (e.g., Dynamic Programming, Recursion)"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="currentLevel">Current Preparation Level</label>
            <select
              id="currentLevel"
              name="currentLevel"
              value={currlevel}
              onChange={(e) => setCurrlevel(e.target.value)}
              required
            >
              <option value="Beginner">Beginner - Just starting out</option>
              <option value="Intermediate">Intermediate - Some experience</option>
              <option value="Advanced">Advanced - Strong foundation</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Generate Study Plan
            <span className="button-arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default GenerateForm
