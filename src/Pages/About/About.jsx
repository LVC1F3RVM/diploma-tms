import React from "react";
import OurTeam from "./components/OurTeam";
import AboutUsText from "./components/AboutUsText";
import BreadCrumbs from "../../components/BreadCrumbs";

function About() {
  return (
    <div>
      <BreadCrumbs />
      <AboutUsText />
      <OurTeam />
    </div>
  );
}

export default About;
