import React from 'react';
import Banner from './Banner';
import Weather from './Weather';
import Chart from './Chart';
import '../css/styles.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="app-container">
        <Weather />
        <Chart />
      </div>
    </div>
  );
}

export default App;
