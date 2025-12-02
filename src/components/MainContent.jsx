import React from 'react'
import ProfileSection from './ProfileSection'
import CharacterCard from './CharacterCard'
import './MainContent.css'

const MainContent = () => {
  return (
    <main className="main-content">
      <ProfileSection />
      <CharacterCard />
    </main>
  )
}

export default MainContent
