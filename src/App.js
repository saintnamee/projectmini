import React from 'react';
// import './App.css';
import Slide from './test/Slide';
import Pop from './test/login/Pop';
import Weather from './test/Weather';
import Saint from './test/Saint';
import Weathers from './test/Weathers';
import Page from './test/Page';
import Paral from './test/Paral';



function App() {
  return (

    <div className="text-center">
        <Paral/>
        <Slide/>
        <Weather/>
        <h4>ค่า PM 2.5 </h4>
        <Weathers/>
        <Pop/>
      <div className="text-left">
        
        
        
        <Page/>
        <Saint/>
        
      </div>


    </div>

  );
}

export default App;
