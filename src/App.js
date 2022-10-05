
import './App.css';
import Intro from './Intro.js';
import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

// const TRACKING_ID = 'UA-241233431-2'



function App() {
  // const ref = useRef(null)
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  useEffect(() => {
    ReactGA.initialize('UA-241233431-2');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);

  return (
    <div className="App">
      
      <Intro  />
      
    </div>
  );
}

export default App;
