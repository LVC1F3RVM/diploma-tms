import React from "react";
import { Input } from "@material-ui/core";

function InfoForm({ info }) {
  return (
    <form>
      <Input type={info}> </Input>
    </form>
  );
}

export default InfoForm;
