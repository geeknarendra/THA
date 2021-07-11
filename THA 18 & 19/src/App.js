
import './App.css';
import Chess from './component/Chess';
import Button from './component/button';


function App() {
  return (
    <div >
      <Chess/>
      <div className="State">
        <p>There are 4 counter component instances that each manage their own state.</p>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      </div>

    </div>
  );
}

export default App;
