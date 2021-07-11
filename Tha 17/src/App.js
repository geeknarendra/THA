import logo from './logo.svg';
import './App.css';
import Calorie from './Calorie';

function App() {
  return (
    <div className="App">
        <h1>Calorie Read Only</h1>
      <div className="container">
        <Calorie food="Fried Rice" cal="90"/>
        <Calorie food="Pizza" cal="56"/>
        <Calorie food="Burger" cal="69"/>
        <Calorie food="Coke" cal=" 500"/>
        <Calorie food="Browne" cal="180"/>
        <Calorie food="Fried Rice" cal="90"/>
        <Calorie food="Lassania" cal="200"/>
        <Calorie food="Pani Puri" cal="10"/>
      </div>
    </div>
  );
}

export default App;
