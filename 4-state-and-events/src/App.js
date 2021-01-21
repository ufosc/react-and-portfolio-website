import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  let badClicks = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={ () => setClicks(clicks+1)}>Click me!</button>
        <div>I've been clicked {clicks} times! I use state in react!</div>

        <button onClick={ ()  => badClicks+=1 }>Click me!</button>
        <div>I've been clicked {badClicks} times! I don't use state in react!</div>
      </header>
    </div>
  );
}

export default App;
