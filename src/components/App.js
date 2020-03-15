import React from 'react';
import Banner from './Banner';
import Weather from './Weather';
import '../css/styles.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="app-container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
