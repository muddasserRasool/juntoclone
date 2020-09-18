import React from "react";
import TypistAnimate from './Typist';
import { Link } from "react-router-dom";

export default function Junto() {

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4 className="Hi">HI, WE'RE JUNTO</h4>
      <h1 className="help">We're here to help you</h1>
      <TypistAnimate />

      <br />
      <br />
      <ul className="how-we-work">
        <li>
        <Link style={{ textDecoration: "none" }} to="/Aboutus">
        <span className="Newbutton">Lets Make it Happen</span></Link>
        </li>
        <li>
        <span className="fontAdjust">How we Work</span><span> &nbsp; &nbsp; </span> <span className="icon">  &#10230;</span>
        </li>
      </ul>
    



      <video className= "Video" loop muted="" preload=""  autoplay="" src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.webm" />





    </div>
  )
}