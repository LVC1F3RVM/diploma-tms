import React from "react";
import { Typography } from "@material-ui/core";

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
  const { premiereMonth, description, movies } = props;
  return (
    <article>
      <Typography variant="h2" component="h2">
        {getMonthName(premiereMonth.getMonth())} premiere
      </Typography>
      <Typography component="p">{description}</Typography>
      {movies.map((movie) => (
        <div>
          <p>
            {movie.date.getDate()}/{getMonthName(movie.date.getMonth())}
          </p>
          <p>{movie.description}</p>
        </div>
      ))}
    </article>
  );
}

export default MoviePremiere;
