import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import MenuCard from './MenuCard'
import './Home.css'
import Orders from './Orders'
import ProfileForm from './ProfileForm'

function Home() {
  const [selectedMenu, setSelectedMenu] = useState('')

  const handleMenuClick = (menuName) => {
    setSelectedMenu((prevSelectedMenu) =>
      prevSelectedMenu === menuName ? '' : menuName
    )
  }

  const menuItems = [
    {
      name: 'My Profile',
      subName: 'Notifications, password',
      onClick: () => handleMenuClick('profile'),
      isSelected: selectedMenu === 'profile',
    },
    {
      name: 'My Orders',
      subName: 'Already have 12 orders',
      onClick: () => handleMenuClick('orders'),
      isSelected: selectedMenu === 'orders',
    },
    {
      name: 'Shipping Addresses',
      subName: '3 addresses',
      onClick: () => handleMenuClick('addresses'),
      isSelected: selectedMenu === 'addresses',
    },
  ]

  const renderSelectedContent = () => {
    switch (selectedMenu) {
      case 'profile':
        return (
          <div className="profile-content">
            <ProfileForm />
          </div>
        )
      case 'orders':
        return (
          <div className="orders-content">
            <Orders />
          </div>
        )
      case 'addresses':
        return <div className="addresses-content">Shipping Addresses</div>
      default:
        return null
    }
  }

  return (
    <div className="home-container">
      <div className="nav-heading">Home/Profile</div>

      <div className="content-container">
        <div className="menu">
          <ProfileCard />
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>

        <div className="selected-content">{renderSelectedContent()}</div>
      </div>
    </div>
  )
}

export default Home
