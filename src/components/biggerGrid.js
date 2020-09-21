import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              
          <h5 style={{ color: "#91C691" }}>ATTRACT MORE VISITORS</h5>
                        <h1 style={{ color: "#18242A" }}>SEO and Content Marketing</h1>
                        <br />
                        <h2 style={{ color: "#18242A" }}> Result-driven strategy and Premium content creation.  </h2>
                        <span style={{ color: "#91C691", textDecoration: "underline" }}>Start This Service</span> <span style={{ color: "#91C691" }}>&nbsp; &#10230;</span>
              
              
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
}