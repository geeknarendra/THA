import React ,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';


function App() {

  const [login,setLogin]=useState(false)
  
  return (
   <Router>
     <Navbar login={login}/>
     <Switch>
       <Route exact path="/">
        <Home login={login} setLogin={setLogin}/>
       </Route>

       <Route path="/about">
        <About />
       </Route>

       <Route path="/profile">
        <Profile />
       </Route>

       <Route path="/dashboard">
        <Dashboard />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
