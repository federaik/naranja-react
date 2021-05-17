import './css/App.css';
import './css/Player.css'
import avatar from './images/avatar-icon.png'

const players = [
  { id: 1, firstName: 'Facu', lastName: 'Otta' },
  { id: 2, firstName: 'Carlos', lastName: 'Tevez' },
  { id: 3, firstName: 'Rambo', lastName: 'Otta' },
  { id: 4, firstName: 'Rodri', lastName: 'Alegre' },
  { id: 5, firstName: 'Gula', lastName: 'Pace' },
  { id: 6, firstName: 'Fede', lastName: 'Otta' },
  { id: 7, firstName: 'Chicho', lastName: 'Serna' },
  { id: 8, firstName: 'Juan Roman', lastName: 'Riquelme' }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Reactive Orange</h1>
      </header>
      <nav>
        <ul>
          <li>Games</li>
          <li>Table</li>
          <li>Scores</li>
          <li>About</li>
        </ul>
      </nav>
      <main>
        <div className="players-container">
          { 
            players.map(player => {
              return (
                <div key={player.id}>
                  <div className="avatar">
                    <img src={avatar} alt="avatar"/>
                    <div>
                      {player.firstName} {player.lastName}
                    </div>
                  </div>
                </div>
            )}) 
          }
        </div>
      </main>
      <footer>
        <h3>this is the footer</h3>
      </footer>
    </div>
  );
}

export default App;
