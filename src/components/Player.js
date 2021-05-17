import '../css/Player.css'
import avatar from '../images/avatar-icon.png'

const Player = ({ player }) => {
  return (
    <div>
      <div className="avatar">
        <img src={avatar} alt="avatar"/>
        <div>
          {player.firstName} {player.lastName}
        </div>
      </div>
    </div>
  )
}

export default Player;