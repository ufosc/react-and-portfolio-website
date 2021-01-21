import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [displayed, setDisplayed] = useState(true);

  if(displayed) {
      return(
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Wow that's a nice logo!
                  </p>
                  <button onClick={ () => setDisplayed(!displayed)}>Change Display</button>
              </header>
          </div>
      )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Where did the logo go???
        </p>
          <button onClick={ () => setDisplayed(!displayed)}>Change Display</button>
      </header>
    </div>
  );
}

export default App;
