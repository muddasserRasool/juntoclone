import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";
import '../App.css';
import {GlobalMobile} from '../App.js';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1, 3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },

}));




export default function TwoContainers() {
    const isMobile = useContext(GlobalMobile);
    const classes = useStyles();
    const [Readmore, setReadmore] = useState(false)
    const [Readmore2, setReadmore2] = useState(false)
    const Makebigger = useWebAnimations();
    const Makebigger2 = useWebAnimations();
    const Smoothin = useWebAnimations();
    const Smoothin2 = useWebAnimations();



    useEffect(() => {
        const e1 = document.getElementById("container1");
        const e2 = document.getElementById("container2")

        e1.addEventListener("mouseenter", (e) => {
            setReadmore(true)

            if(!isMobile){
            Makebigger.animate({
                keyframes: {
                    transform: ["translate(60px, -70px)"],
                },
                timing: {
                    duration: 1200, // Run for 1000ms
                    fill: "both", // Repeat once
                    easing: "ease-in-out",
                }
            });
        }
            Smoothin.animate({ ...fadeInUp })
    
        })
        e1.addEventListener("mouseleave", (e) => {
            setReadmore(false)
            if(!isMobile){
            Makebigger.animate({
                keyframes: {
                    transform: ["translate(0, 0)"], // Move by 500px
                },
                timing: {

                    duration: 1200, // Run for 1000ms
                    fill: "both", // Repeat once
                    easing: "ease-in-out",
                }
            });
            }
        })

        e2.addEventListener("mouseenter", (e) => {
            setReadmore2(true)
        
            if(!isMobile){
            Makebigger2.animate({
                keyframes: {
                    transform: ["translate(-60px, -70px)"],
                },
                timing: {
                    duration: 1200, // Run for 1000ms
                    fill: "both", // Repeat once
                    easing: "ease-in-out",
                }
            });
        }
            Smoothin2.animate({ ...fadeInUp })
    
        })
        e2.addEventListener("mouseleave", (e) => {
            setReadmore2(false)
            if(!isMobile){
            Makebigger2.animate({
                keyframes: {
                    transform: ["translate(0, 0)"], // Move by 500px
                },
                timing: {

                    duration: 1200, // Run for 1000ms
                    fill: "both", // Repeat once
                    easing: "ease-in-out",
                }
            });
        }
        })
    });




    const extraContent = <div className="containerAddOn" ref={Smoothin.ref}>
        <p className="extra-content">
            Our SEO services have one goal: drive qualified prospects to your website. From content creation and promotion to white-hat link building, learn how we can help you outrank the competition.
    </p>
        <ul>
            <li>
                Advanced technical SEO foundation with a comprehensive search strategy
                            </li>
            <li>
                Ongoing content strategy, creation, and targeted promotion to maximize thought leadership
                            </li>
            <li>
                Monthly reporting calls with our in-house marketing experts to identify growth and opportunities
                            </li>
        </ul>
        <img src="https://junto.digital/wp-content/uploads/2018/12/service-seo.png" alt="backpic" width="100%" height="100%" />
    </div>


    const extraContent2 = <div className="containerAddOn2" ref={Smoothin2.ref}>
        <p className="extra-content">
        Your website is your best salesperson. Which is why we optimize every site for visibility. Our websites look damn good on mobile and are optimized for both conversions and search engines.
    </p>
        <ul>
            <li>
            Fully customized, multi-page websites built to drive results
                            </li>
            <li>
            Custom themes designed to easily update copy and imagery
                            </li>
            <li>
            Optimized for mobile, conversions and search engines
                            </li>
        </ul>
        <img src="https://junto.digital/wp-content/uploads/2018/12/service-web-development.png" alt="backpic" width="100%" height="100%" />
    </div>

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ width: "100%", margin: "0px", padding: "0px" }}>
                <Grid item xs={12} sm={6} id="container1" ref={Makebigger.ref}  >
                    <Paper className={classes.paper} >
                        <h5 style={{ color: "#91C691" }}>ATTRACT MORE VISITORS</h5>
                        <h1 style={{ color: "#18242A" }}>SEO and Content Marketing</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}> Result-driven strategy and Premium content creation.  </h2>
                        {!Readmore && <span><span style={{ color: "#91C691", textDecoration: "underline" }}>Start This Service</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span></span>}
                        {Readmore && extraContent}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} id="container2" ref={Makebigger2.ref}>
                    <Paper className={classes.paper}>
                        <h5 style={{ color: "#91C691" }}>IMPRESS YOUR AUDIENCE</h5>
                        <h1 style={{ color: "#18242A" }}>Web Design and Development</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}>Mobile friendly easily editable and search optimized.  </h2>
                        {!Readmore2 && <span><span style={{ color: "#91C691", textDecoration: "underline" }}>Start This Service</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span></span>}
                        {Readmore2 && extraContent2}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}