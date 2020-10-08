import React from "react";
import FooterPageInfo from "./components/FooterPageInfo";

function FooterPage(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <FooterPageInfo info={props.info}></FooterPageInfo>
    </div>
  );
}

export default FooterPage;
