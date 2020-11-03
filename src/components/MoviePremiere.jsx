import React from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  section_title: {
    fontSize: "2em",
    fontFamily: "Roboto, Open Sans, sans-serif",
    fontWeight: 300,
    margin: "0px 0px 20px",
  },
  paragraph_section: {
    fontSize: "1em",
    fontFamily: "Roboto, Open Sans, sans-serif",
  },
  movie_shedule: {
    display: "flex",
    flexDirection: "row",
  },
  date: {
    border: "1px solid #d7d8da",
    padding: "5px 10px",
  },
  entry_title: {
    padding: "5px 10px",
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
      <Grid container>
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
        <Grid item>
          {movies.map((movie) => (
            <div className={classes.movie_shedule}>
              <p className={classes.date}>
                {movie.date.getDate()}/{getMonthName(movie.date.getMonth())}
              </p>
              <p className={classes.entry_title}>{movie.description}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default MoviePremiere;
