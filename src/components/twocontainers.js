import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
    const classes = useStyles();

    // function BiggerGrid() {
    //     const classes = useStyles();
    //     return (
    //         <div className={classes.root}>
    //             <Grid container spacing={3}>
    //                 <Grid item xs={12} >
    //                     <Paper className={classes.paper}>xs=12</Paper>
    //                 </Grid>
    //             </Grid>
    //         </div>
    //     )
    // }

    // useEffect(() => {
    //     const e1 = document.getElementById("container1");
    //     e1.addEventListener("mousemove", (e) => {

    //         BiggerGrid()

    //     });
    // }, []);


    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ width: "100%", margin: "0px", padding: "0px" }}>
                <Grid item xs={12} sm={6} id="container1" >
                    <Paper className={classes.paper}>

                        <h5 style={{ color: "#91C691" }}>ATTRACT MORE VISITORS</h5>
                        <h1 style={{ color: "#18242A" }}>SEO and Content Marketing</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}> Result-driven strategy and Premium content creation.  </h2>
                        <span style={{ color: "#91C691", textDecoration: "underline" }}>Start This Service</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>

                        <h5 style={{ color: "#91C691" }}>IMPRESS YOUR AUDIENCE</h5>
                        <h1 style={{ color: "#18242A" }}>Web Design and Development</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}>Mobile friendly easily editable and search optimized.  </h2>
                        <span style={{ color: "#91C691", textDecoration: "underline" }}>Start This Service</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span>


                    </Paper>
                </Grid>
            </Grid>

        </div >
    )

}