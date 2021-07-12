
import './App.css';
import Calorie from './Calorie';
import { useState } from 'react';

function App() {
  const [list,setList]=useState([
    {
      food:"Pizza",
      calorie:56
    },
    {
      food:"Burger",
      calorie:69
    },
    {
      food:"Coke",
      calorie:500
    },
    {
      food:"Browne",
      calorie:180
    },
    {
      food:"Fried Rice",
      calorie:90
    },
    {
      food:"Lassania",
      calorie:56
    },
    {
      food:"Pani Puri",
      calorie:10
    },
])
   
  return (
    <div className="App">
        <h1>Calorie Read Only</h1>
      <div className="container">
        {list.map((item,indx)=>(
          <Calorie food={item.food} calorie={item.calorie}list={list}  setList={setList} index={indx} />
        ))}
      </div>
    </div>
  );
}

export default App;
