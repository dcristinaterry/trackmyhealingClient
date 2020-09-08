import React from 'react';
import './styles/app.css';
import LogIn from './LogIn/LogIn'

const App = () => {
  return (
    <div className="App">
      <p className="text-red-300">Welcome to Track My Healing</p>
      <LogIn/>
    </div>
  );
}

export default App;
