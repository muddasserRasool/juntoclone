import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Junto from './components/Junto';
import GetStarted from './components/GetStarted';
import Services from './components/Services';
import Blog from './components/Blog';
import PersistentDrawerRight from './components/MobileNavbar';


export default function Webswitch() {

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

  const Navbar = () => {
    return (
      <nav className="NavBar">
        
        <ul className="components">
          <li>
            <Link to="/components/GetStarted">
              <span className="button">Get Started &#10132;</span></Link>
          </li>
          <li>
            <Link to="/components/Services">Services &#x2207;</Link>
          </li>

          <li>
            <Link to="/components/Blog">Blog</Link>
          </li>

          <li>
            <Link to="/components/Aboutus">About us</Link>
          </li>
          <li>
            <Link style={{ textDecoration: "underline", textDecorationColor: "#91C691" }} to="/components/Home">Home</Link>
          </li>

        </ul>
      </nav>
    )
  }



  return (
    <Router>
      <div>
      <ul>
          <Link to="/">
            <img width="160" height="52" src="https://junto.digital/wp-content/uploads/2019/01/logo-junto-main.png" className="logo" alt="Junto Logo" />
          </Link>
        </ul>


        {isMobile ? <PersistentDrawerRight />: <Navbar />}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/components/Home"> <Home /> </Route>
          <Route path="/components/Aboutus"> <Aboutus /> </Route>
          <Route exact path="/components/Blog"> <Blog /> </Route>
          <Route path="/components/Services"> <Services /> </Route>
          <Route exact path="/"> <Junto /> </Route>
          <Route exact path="/GetStarted"> <GetStarted /> </Route>
          <Route path="*"> <h2>404 Page not found</h2> </Route>
        </Switch>
      </div>
    </Router>
  );
}