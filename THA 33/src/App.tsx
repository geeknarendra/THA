import React, { useState } from 'react';
import './App.css';
import ThemeContext from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Todos from './components/Todos';

const App = () => {

  const [theme, setTheme] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='app'>
        <Todos />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
