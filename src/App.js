import React from 'react';
// import './App.css';
import Slide from './test/Slide';
import Pop from './test/login/Pop';
import Weather from './test/Weather';
import Saint from './test/Saint';
import Weathers from './test/Weathers';



function App() {
  return (

    <div className="text-center">
       
      
        <Pop/>
        <h1>ค่า PM 2.5</h1>
        <Weather/>
        <Weathers/>
        <Slide/>
      <div className="text-left">
        
        <Saint/>

        

      </div>


    </div>

  );
}

export default App;
