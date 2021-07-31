
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';




function App() {

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

     
      </Switch>
    </Router>

  );
}

export default App;
