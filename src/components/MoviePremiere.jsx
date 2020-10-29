import React from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  section_title: {
    fontSize: "2em",
    margin: "0px 0px 20px",
  },
  paragraph_section: {
    fontSize: "1em",
    fontFamily: "Roboto, Open Sans, sans-serif",
  },
});

const getMonthName = (monthNumber) => {
  switch (monthNumber) {
    case 0:
      return "January";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "July";
  }
};

function MoviePremiere(props) {
  const classes = useStyles();

  const { premiereMonth, description, movies } = props;
  return (
    <div>
      <Grid>
        <Typography
          variant="h2"
          component="h2"
          className={classes.section_title}
        >
          {getMonthName(premiereMonth.getMonth())} premiere
        </Typography>
        <Typography component="p" className={classes.paragraph_section}>
          {description}
        </Typography>
        {movies.map((movie) => (
          <div>
            <p>
              {movie.date.getDate()}/{getMonthName(movie.date.getMonth())}
            </p>
            <p>{movie.description}</p>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default MoviePremiere;
