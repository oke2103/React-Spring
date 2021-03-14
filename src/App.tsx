import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to react !!
        </a>
      </body>
    </div>
  );
}

export default App;
