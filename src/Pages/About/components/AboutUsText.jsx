import React from "react";
import { Grid } from "@material-ui/core";
import figure from "../../../images/figure.jpg";

function AboutUsText() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <img src={figure} alt="Popcorn" />
        </Grid>
        <Grid item xs={8}>
          <h3>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam.
          </h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUsText;
