import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Junto from './components/Junto';
import GetStarted from './components/GetStarted';
import Services from './components/Services';
import Blog from './components/Blog';


export default function Webswitch() {
  return (
    <Router>
      <div>
        <nav className="NavBar">
          <ul>
          <li>
              <Link to="/components/Home">Home</Link>
            </li>
            <li>
              <Link to="/components/Aboutus">About us</Link>
            </li>
            <li>
              <Link to="/components/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/components/Services">Services</Link>
            </li>
            <li>
              <Link to="/components/GetStarted">Get Started</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/components/Home"> <Home /> </Route>
          <Route path="/components/Aboutus"> <Aboutus /> </Route>
          <Route exact path="/components/Blog"> <Blog /> </Route>
          <Route path="/components/Services"> <Services /> </Route>
          <Route path="/components/Junto"> <Junto /> </Route>
          <Route exact path="/GetStarted"> <GetStarted /> </Route>
          <Route path="*"> <h2>404 Page not found</h2> </Route>
        </Switch>
      </div>
    </Router>
  );
}