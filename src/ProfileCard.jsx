import './styles/ProfileCard.css'
function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        className="profile-pic"
        src="https://shorturl.at/buHLY"
        alt="prof pic"
      />
      <span className="details">
        <h5 className="name">Girishk</h5>
        <p className="email">griiskaim@gmail.com</p>
      </span>
    </div>
  )
}

export default ProfileCard
