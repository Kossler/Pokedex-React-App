import './App.css';

function App() {
  return (
    <div className="app-background">
      <img className="spinningImage" src={`${process.env.PUBLIC_URL}/Assets/images/PokeBall.png`} alt="Spinning Pokeball"/>
      <div className="app-header">
        <div id="header-logo"><img src={`${process.env.PUBLIC_URL}/Assets/images/PokeBall Icon.png`} alt="Pokeball Logo"/></div>
        <div>Pokédex</div>
        <div>Search</div>
      </div>
      <div className="app-body">

      </div>
    </div>
  );
}

export default App;
