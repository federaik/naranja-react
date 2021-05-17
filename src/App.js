import { useState } from 'react'
import './css/App.css';
import './css/Player.css'
import avatar from './images/avatar-icon.png'
import { Link } from 'react-router-dom'

const players = [
  { id: 1, firstName: 'Facu', lastName: 'Otta' },
  { id: 2, firstName: 'Carlos', lastName: 'Tevez' },
  { id: 3, firstName: 'Rambo', lastName: 'Otta' },
  { id: 4, firstName: 'Rodri', lastName: 'Alegre' },
  { id: 5, firstName: 'Gula', lastName: 'Pace' },
  { id: 6, firstName: 'Fede', lastName: 'Otta' },
  { id: 7, firstName: 'Roberto', lastName: 'Carlos' },
  { id: 8, firstName: 'Juan Roman', lastName: 'Riquelme' }
];

const Player = ({ player, showPlayerDetails, selectedPlayerId }) => {
  return (
    <div onClick={() => showPlayerDetails(player)}>
      <div className={`avatar ${selectedPlayerId === player.id ? 'selected' : ''}`}>
        <img src={avatar} alt="avatar"/>
        <div>
          {player.firstName} {player.lastName}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)

  const showPlayerDetails = (player) => {
    setSelectedPlayerId(player.id)
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="players-container">
          { 
            players.map(player => {
              return (
                <Player player={player} 
                  key={player.id} 
                  showPlayerDetails={showPlayerDetails} 
                  selectedPlayerId={selectedPlayerId} 
                />
            )}) 
          }
        </div>
      </main>
    </div>
  );
}

export default App;
