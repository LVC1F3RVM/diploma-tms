import React from "react";

function InfoText({ info }) {
  return (
    <div>
      <p data-testid="Info">{info}</p>
    </div>
  );
}

export default InfoText;
