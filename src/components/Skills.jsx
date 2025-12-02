import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
      <section className="skills-section">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-item">
          <h2>Dev Arsenal</h2>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript (ES6+), PHP/Python.</li>
            <li>Frameworks: React.js, Next.js, Laravel.</li>
            <li>Tools: Git, Docker, Figma.</li>
            <li>AI Prompting Skills: Proficient in crafting effective prompts for AI tools to enhance productivity and creativity.</li>
          </ul>
          <p>I am always eager to learn new technologies and improve my existing skills.</p>
        </div>
        <div className="skills-item">
          <h2>Gamer Instincts</h2>
          <p>Here are some of the key skills I have developed over my career:</p>
          <ul>
            <li>Strategic Thinking: (Derived from years of zone rotations).</li>
            <li>Team Communication: (Clear callouts in squads = Clear comms in dev teams).</li>
            <li>Reflexive Problem Solving: (Handling bugs like a hot-drop in Pochinki).</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Skills
