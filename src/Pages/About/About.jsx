import React from "react";
import OurTeam from "./components/OurTeam";
import AboutUsText from "./components/AboutUsText";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AboutUsText />
      <OurTeam />
    </div>
  );
}

export default About;
