import React from 'react';
// import './App.css';
import Saint from './test/Saint';
import Weather from './test/Weather';
import Slide from './test/Slide';
// import Apps from './test/login/Apps';



function App() {
  return (

    <div className="text-center">
        <Slide />
        {/* <Apps/> */}

      <div className="text-left">
        <Saint />
        <Weather />

      </div>


    </div>

  );
}

export default App;
