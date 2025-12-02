import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <section className="projects-section">
        <h1 className="projects-title">Projects</h1>
        <div className="project-item">
          <h2>Game Base portfolio</h2>
          <ul>
            <li>Description: A responsiveportfolio designed for a gaming community or clan.</li>
            <li>Tech Stack: React</li>
            <li>Why: Shows you understand the gamer aesthetic.</li>
          </ul>
        </div>
        <h1 className="projects-subtitle">Academic Projects</h1>
        <div className="project-item">
          <h3>1. Attendance & Assignment Management System (BCA)</h3>
          <p>Role: Solo Developer | Context: Bachelor of Computer Applications</p>
          <p>The Mission: Designed a digital classroom system to eliminate manual paperwork for students and faculty.</p>
          <p>Tech Stack: PHP (Vanilla), MySQL, HTML5, CSS3.</p>
          <p>Key Features:</p>
          <ul>
            <li>User Roles: Admin (Teacher) vs. User (Student) login panels.</li>
            <li>Assignment Logic: Students can upload files; teachers can grade them (CRUD operations).</li>
            <li>Data Tracking: Automated attendance calculation based on daily inputs.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>2. Employee Leave Management System (MCA)</h3>
          <p>Role: Full Stack Developer | Context: Master of Computer Applications</p>
          <p>The Mission: Built a workflow automation tool to handle employee time-off requests, replacing email chains with a centralized dashboard.</p>
          <p>Tech Stack: PHP, MySQL, JavaScript, Bootstrap.</p>
          <p>Key Features:</p>
          <ul>
            <li>Workflow Automation: Employee applies for leave - Admin receives notification - Admin Approves/Rejects.</li>
            <li>Resource Management: Real-time calculation of remaining leave balances (Sick/Casual/Earned).</li>
            <li>Reporting: Generated monthly leave reports for HR.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Projects
