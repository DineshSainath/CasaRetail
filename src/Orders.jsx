import './Orders.css'
import OrderCard from './OrderCard'

function Orders() {
  return (
    <div>
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
  )
}

export default Orders
