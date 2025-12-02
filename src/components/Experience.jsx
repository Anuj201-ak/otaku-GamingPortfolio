import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="experience">
      <section className="experience-section">
        <h1 className="experience-title">Experience</h1>
        <div className="experience-item">
          <h2>In-Game Leader (IGL) & Strategist</h2>
          <p>Battlegrounds Mobile India (8 Years Experience)</p>
          <p>Role: Squad Captain / Strategist</p>
          <p>Skills Transferred:</p>
          <ul>
            <li>Communication: Learned to give clear, concise instructions under high pressure (Zone closings/Squad fights).</li>
            <li>Teamwork: Coordinated with random teammates to achieve a common goal (Chicken Dinner).</li>
            <li>Adaptability: Quick decision-making when the "plan" fails (Just like debugging code when it breaks).</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>Full Stack Developer (Academic Capstone)</h2>
          <p>Project: Employee Leave Management System (MCA)</p>
          <p>Role: Lead Developer (Solo)</p>
          <p>The Mission: Developed a functional internal tool to automate HR workflows.</p>
          <p>Tech Stack: PHP, MySQL, Bootstrap.</p>
          <p>Key Achievements:</p>
          <ul>
            <li>Designed a normalized relational database (SQL) to handle complex user permissions (Admin vs. Employee).</li>
            <li>Built a dashboard that reduced manual data entry logic.</li>
            <li>Implemented secure login sessions and input validation to prevent SQL injection.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>Freelance Web Designer</h2>
          <p>Self-Initiated</p>
          <p>The Mission: Continuous learning and portfolio development.</p>
          <p>Action:</p>
          <ul>
            <li>Designing and coding a personal "Gamer Portfolio" to showcase distinct identity.</li>
            <li>Exploring modern UI/UX trends (Dark Mode, Neon Aesthetics) to bridge the gap between Gaming and Web.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Experience
