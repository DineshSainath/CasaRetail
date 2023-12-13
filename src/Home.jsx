import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import MenuCard from './MenuCard'
import './Home.css'
import OrderCard from './OrderCard'
import ProfileForm from './ProfileForm'

function Home() {
  const [selectedMenu, setSelectedMenu] = useState('')

  const handleMenuClick = (menuName) => {
    setSelectedMenu((prevSelectedMenu) =>
      prevSelectedMenu === menuName ? '' : menuName
    )
  }

  return (
    <div className="home-container">
      <div className="nav-heading">Home/Profile</div>

      <div className="content-container">
        <div className="menu">
          <ProfileCard />
          <MenuCard
            name="My Profile"
            subName="Notifications, password"
            onClick={() => handleMenuClick('profile')}
            isSelected={selectedMenu === 'profile'}
          />
          <MenuCard
            name="My Orders"
            subName="Already have 12 orders"
            onClick={() => handleMenuClick('orders')}
            isSelected={selectedMenu === 'orders'}
          />
          <MenuCard
            name="Shipping Addresses"
            subName="3 addresses"
            onClick={() => handleMenuClick('addresses')}
            isSelected={selectedMenu === 'addresses'}
          />
        </div>

        <div className="selected-content">
          {selectedMenu === 'profile' && (
            <div className="profile-content">
              <ProfileForm />
            </div>
          )}
          {selectedMenu === 'orders' && (
            <div className="orders-content">
              <p className="content-name">My Orders</p>
              <OrderCard
                orderNo="1"
                name="Madeup White Cotton Blend Checkered Slim Fit Shirt"
                deliveryInfo="Express Delivery by Sat, Aug 30"
                paymentInfo="Credit Card Payment"
                price="1,899"
                status="Pending"
              />
              <OrderCard
                orderNo="2"
                name="Madeup White Cotton Blend Checkered Slim Fit Shirt"
                deliveryInfo="Express Delivery by Sat, Aug 30"
                paymentInfo="Credit Card Payment"
                price="1,899"
                status="Pending"
              />
              <OrderCard
                orderNo="3"
                name="Madeup White Cotton Blend Checkered Slim Fit Shirt"
                deliveryInfo="Express Delivery by Sat, Aug 30"
                paymentInfo="Credit Card Payment"
                price="1,899"
                status="Delivered"
              />
              <OrderCard
                orderNo="4"
                name="Madeup White Cotton Blend Checkered Slim Fit Shirt"
                deliveryInfo="Express Delivery by Sat, Aug 30"
                paymentInfo="Credit Card Payment"
                price="1,899"
                status="Delivered"
              />
            </div>
          )}
          {selectedMenu === 'addresses' && (
            <div className="addresses-content">Shipping Addresses</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
