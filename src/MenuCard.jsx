import React, { useState, useEffect } from 'react'
import './styles/MenuCard.css'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

function MenuCard(props) {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth <= 768)
    }

    checkIsTablet()
    window.addEventListener('resize', checkIsTablet)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsTablet)
    }
  }, [])

  return (
    <div
      className={`menu-card ${props.isSelected ? 'clicked' : ''}`}
      onClick={props.onClick}
    >
      <div className="text-container">
        <h4 className="menu-name">{props.name}</h4>
        <p className="sub-name">{props.subName}</p>
      </div>
      <p className="arrow-link">
        {isTablet ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </p>
    </div>
  )
}

export default MenuCard
