import ProfileCard from './ProfileCard'
import MenuCard from './MenuCard'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="nav-heading">Home/Profile</div>

      <ProfileCard />
      <div className="menu"></div>
      <MenuCard name="My Profile" subName="Notifications, password" />
      <MenuCard name="My Orders" subName="Already have 12 orders" />
      <MenuCard name="Shipping Addresses" subName="3 addresses" />
    </div>
  )
}

export default Home
