import React, { useEffect } from "react";
import TypistAnimate from './Typist';
import { Link } from "react-router-dom";
import useWebAnimations, { slideInLeft } from "@wellyshen/use-web-animations";
import TwoContainers from './twocontainers';



export default function Junto() {

  const ArrowMove = useWebAnimations();


  useEffect(() => {
    const e1 = document.getElementById("icon");
    e1.addEventListener("mousemove", (e) => {
      ArrowMove.animate({ ...slideInLeft });
    });
  }, [ArrowMove]);

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
        <li >
          <Link to="/Aboutus">
            <span className="fontAdjust">How we Work</span></Link><span> &nbsp; &nbsp; </span> <span className="icon" id="icon" ref={ArrowMove.ref} >  &#10230;</span>
        </li>
      </ul>
      <video className="Video" loop muted="" autoplay="" poster="https://junto.digital/wp-content/uploads/2018/09/hero-home.jpg" src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.webm" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TwoContainers />
      

    </div>
  )
}