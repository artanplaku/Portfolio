
import './App.css';
import Intro from './Intro.js';

import React, { useEffect, useRef } from "react";

function App() {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div className="App">
      
      <Intro  />
      
    </div>
  );
}

export default App;
