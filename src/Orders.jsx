import './Orders.css'
import OrderCard from './OrderCard'

function Orders() {
  const orderData = [
    {
      orderNo: '1',
      name: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
      deliveryInfo: 'Express Delivery by Sat, Aug 30',
      paymentInfo: 'Credit Card Payment',
      price: '1,899',
      status: 'Pending',
    },
    {
      orderNo: '2',
      name: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
      deliveryInfo: 'Express Delivery by Sat, Aug 30',
      paymentInfo: 'Credit Card Payment',
      price: '1,899',
      status: 'Pending',
    },
    {
      orderNo: '3',
      name: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
      deliveryInfo: 'Express Delivery by Sat, Aug 30',
      paymentInfo: 'Credit Card Payment',
      price: '1,899',
      status: 'Delivered',
    },
    {
      orderNo: '4',
      name: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
      deliveryInfo: 'Express Delivery by Sat, Aug 30',
      paymentInfo: 'Credit Card Payment',
      price: '1,899',
      status: 'Delivered',
    },
  ]

  return (
    <>
      <p className="content-name">My Orders</p>

      {orderData.map((item) => (
        <OrderCard
          key={item.orderNo}
          orderNo={item.orderNo}
          name={item.deliveryInfo}
          deliveryInfo={item.deliveryInfo}
          paymentInfo={item.paymentInfo}
          price={item.price}
          status={item.status}
        />
      ))}
    </>
  )
}

export default Orders
