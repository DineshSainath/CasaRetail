import React from 'react'
import './MenuCard.css'

function MenuCard(props) {
  return (
    <div className="menu-card">
      <div className="text-container">
        <h4 className="menu-name">{props.name}</h4>
        <p className="sub-name">{props.subName}</p>
      </div>
      <p className="arrow-link">&gt;</p>
    </div>
  )
}

export default MenuCard
