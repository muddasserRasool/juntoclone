import React, {createContext, useState, useEffect} from 'react';
import './App.css';
import Webswitch from './components/Webswitch';

export const GlobalMobile = createContext(false);

function App() {

  
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1000;
  console.log(isMobile)

  return (
    <div className="App">
      <GlobalMobile.Provider value={isMobile}>
    <Webswitch />
    </GlobalMobile.Provider>
    </div>
  );
}

export default App;
