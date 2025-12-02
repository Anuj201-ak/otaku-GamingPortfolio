import React from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/contact'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/MainContent" element={<MainContent />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
