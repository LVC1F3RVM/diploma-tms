import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function JoinUsMainContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid>
          <Grid item>
            <h2>Consectetur adipiscing elit sed eiusmod tempor</h2>
            <p>
              Aenean vehicula eget risus sit amet posuere. Maecenas id risus
              maximus, malesuada leo eget, pellentesque arcu. Phasellus vitae
              leo rhoncus, consectetur mauris vitae, lacinia quam. Nunc turpis
              erat, accumsan eget justo quis, auctor ultricies magna. Mauris
              sodales, risus sit amet hendrerit tincidunt, erat ante facilisis
              sapien, sit amet maximus neque massa a felis. Nullam consectetur
              justo massa, vel commodo metus gravida in. Aliquam erat volutpat.
              Nullam a lorem sed lorem euismod gravida a eu velit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec venenatis ac
              ligula vel pharetra. Aenean vitae nulla sed dui volutpat euismod.
            </p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default JoinUsMainContent;
