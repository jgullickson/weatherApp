import React from 'react';
import Banner from './Banner';
import Weather from './Weather';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/styles.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Weather />
    </div>
  );
}

export default App;
