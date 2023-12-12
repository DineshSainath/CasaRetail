import React from 'react'
import './OrderCard.css'
import { FaAngleDown } from 'react-icons/fa'

function OrderCard(props) {
  return (
    <div className="order-card">
      <img className="order-img" src="https://shorturl.at/eCT08" alt="Order" />
      <div className="order-details">
        <p className="no">Order# {props.orderNo}</p>
        <p className="name">{props.name}</p>
        <p className="delivery">{props.deliveryInfo}</p>
        {/* Add more details as needed */}
      </div>
      <div className="order-tags">
        <p className="payment">{props.paymentInfo}</p>
        <p className="price">Rs {props.price}</p>
        <p className="dropDown">
          <FaAngleDown />
        </p>
        <p className="status">{props.status}</p>
      </div>
    </div>
  )
}

export default OrderCard
