import React from "react";
import FooterPageInfo from "./components/FooterPageInfo";

function FooterPage(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <FooterPageInfo info={props.info}></FooterPageInfo>
    </div>
  );
}

export default FooterPage;
