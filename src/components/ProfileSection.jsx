import React from 'react'
import './ProfileSection.css'

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="level-badge">
        <span className="level-text">LEVEL 87</span>
        <span className="player-profile">PLAYER PROFILE</span>
      </div>
      
      <h1 className="main-title">
        Hi, I'm <span className="name-orange">Anuj</span><br />
       Dev & Gamer
      </h1>
      
      <p className="description">
      "Code wizard building sleek web apps, fueled by epic gaming sessions that sharpen my problem-solving edge."
      </p>
      
      <div className="skills-tags">
        <span className="skill-tag">5 finger-control</span>
        <span className="skill-tag">Support/Medic</span>
        <span className="skill-tag">The Flanker</span>
        <span className="skill-tag">Survivor</span>
        <span className="skill-tag">Less Talk/Introvert</span>
      </div> 
      <div className="project-cards">
        <div className="project-card">
          <h3>Current Goal</h3>
          <p>Fresher in Web Dev Looking for intership</p>
        </div>

      </div>
    </section>
  )
}

export default ProfileSection
