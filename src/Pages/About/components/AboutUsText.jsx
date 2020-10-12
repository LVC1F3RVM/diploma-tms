import React from "react";
import { Grid } from "@material-ui/core";
import figure from "../../../images/figure.jpg";

function AboutUsText() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <img src={figure} alt="Popcorn" id="popcorn" />
        </Grid>
        <Grid item md={8}>
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
        <Grid container spacing={4} row>
          <Grid item container>
            <Grid item md={9} spacing={4}>
              <h2>Vision & Misssion</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam dignissimos
                ducimus qui blanditiis praesentium voluptatum atque.
              </p>
            </Grid>
            <Grid item md={3} spacing={4}>
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="#">Eiusmod tempor incididunt</a>
                </li>
                <li>
                  <a href="#">Tenim ad minim venia</a>
                </li>
                <li>
                  <a href="#">Quis nostrud exercitation</a>
                </li>
                <li>
                  <a href="#">Ullamco laboris reprehenderit</a>
                </li>
                <li>
                  <a href="#">Duis aute dolor voluptat</a>
                </li>
                <li>
                  <a href="#">Velit esse cillum dolore</a>
                </li>
                <li>
                  <a href="#">Excepteur sint occaeca</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUsText;
