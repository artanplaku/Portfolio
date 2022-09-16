
import './App.css';
import Intro from './Intro.js';
import ReactGA from 'react-ga';
import React, {useEffect} from 'react'


function App() {
  // const ref = useRef(null)
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  useEffect(() => {
    ReactGA.initialize('GA-ID');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);

  return (
    <div className="App">
      
      <Intro  />
      
    </div>
  );
}

export default App;
