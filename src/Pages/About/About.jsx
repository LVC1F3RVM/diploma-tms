import React from "react";
import OurTeam from "./components/OurTeam";
import AboutUsText from "./components/AboutUsText";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

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
    <div>
      <AboutUsText />
      <OurTeam />
    </div>
  );
}

export default About;
