import React from "react";
import InfoForm from "./components/InfoForm";
import InfoLinks from "./components/InfoLinks";
import InfoText from "./components/InfoText";

function FooterPageInfo(props) {
  const { info } = props;
  switch (info.type) {
    case "array":
      return <InfoLinks info={info.description} />;

    case "text":
      return <InfoText info={info.description} />;

    case "form":
      return <InfoForm info={info.formType} />;

    default:
      return <InfoText info={info} />;
  }
}

export default FooterPageInfo;
