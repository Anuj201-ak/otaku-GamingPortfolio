import React from 'react'
import './CharacterCard.css'
import pic1 from '../assets/pic1.png'

const CharacterCard = () => {
  return (
    <div className="character-card">
      <div className="rank-badge">RANK Unknown</div>
      
      <div className="character-image-container">
        <img
          src={pic1}
          alt="bgmi character"
          className="character-image"
        />
      </div>
      
      <div className="character-stats">
        <div className="stat-item">
          <span className="stat-label">Game Name</span>
          <span className="stat-value">INSANEツOTAKU</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">ID</span>
          <span className="stat-value">5200977630</span>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
