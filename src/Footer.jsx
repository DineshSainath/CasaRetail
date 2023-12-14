import './styles/Footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <p> About us </p>
        <p> Delivery Information </p>
        <p> Returns & Exchange </p>
        <p> Technical & Privacy </p>
        <p> Order Status </p>
      </div>

      <div className="center">
        <p className="logo">MADE UP</p>
        <p> Stay in touch with us </p>
        <span className="socials">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaYoutube size={30} />
        </span>
      </div>

      <div className="right">
        <div className="address">
          <p>Our Corporate Office</p>
          <p>No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.</p>
        </div>
        <div className="contact">
          <p>sales@derbymen.com</p>
          <p>044 5566 6889</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
