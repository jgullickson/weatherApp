import React from 'react';
import Banner from './Banner';
import Weather from './Weather';
import Forecast from './Forecast';
import Controls from './Controls';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/styles.css';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Banner />
        <Weather />
      </div>
    </div>
  );
}

export default App;
