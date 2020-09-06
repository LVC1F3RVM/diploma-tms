import React from "react";
import { connect } from "react-redux";

import MoviePremiere from "../../../components/MoviePremiere";
import { Grid } from "@material-ui/core";

export const Premieres = (props) => {
  return (
    <Grid container>
      {props.premieres.map((premier) => (
        <Grid item xs={12} md={4}>
          <MoviePremiere
            key={premier.premiereMonth}
            premiereMonth={premier.premiereMonth}
            description={premier.description}
            movies={premier.movies}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  premieres: state.premieres.lastPremieres,
});

export default connect(mapStateToProps)(Premieres);
