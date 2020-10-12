import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from "@material-ui/lab";
import { Select, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";

const useStyles = makeStyles({
  movieReviewsCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0px 0px 75px",
    backgroundImage: `url(${background})`,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
});

const ALL_GENRES = "All";
const ALL_YEARS = "All";

function MovieReviews() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS);
  const { shows, searchedShows } = useSelector((state) => state.show);

  const showsPerPage = 8;

  useEffect(() => {
    dispatch(getShows(1));
  }, [dispatch]);

  useEffect(() => {
    if (shows) {
      const genresSet = new Set(shows.flatMap((show) => show.genres)); // По жанрам
      setGenres([...genresSet.values()]);
      setCount(Math.ceil(shows.length / showsPerPage));
    }
  }, [dispatch, shows]);

  useEffect(() => {
    if (shows) {
      if (selectedGenre !== ALL_GENRES) {
        const filteredShows = shows.filter((show) =>
          show.genres.includes(selectedGenre)
        );
        dispatch(setSearchedShows(filteredShows));
      } else {
        dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, genres, selectedGenre, shows]);

  useEffect(() => {
    if (shows) {
      const yearsSet = shows.flatMap((show) => show.premiered); // По годам
      const newArrDate = [];
      for (let i = 0; i < yearsSet.length; i++) {
        if (yearsSet[i]) {
          let date = yearsSet[i];
          var newData = date.substring(0, 4);
        }
        newArrDate.push(newData);
      }
      const newYearsSet = new Set(newArrDate);
      setYears([...newYearsSet.values()]);
      setCount(Math.ceil(shows.length / showsPerPage));
    }
  }, [dispatch, shows]);

  useEffect(() => {
    if (shows) {
      if (selectedYear !== ALL_YEARS) {
        const includedShowsPerYear = (show) => {
          if (show.premiered) {
            var newShowDate = show.premiered.substring(0, 4);
            return newShowDate.includes(selectedYear);
          }
        };
        const filteredShowsPerYear = shows.filter(includedShowsPerYear);
        dispatch(setSearchedShows(filteredShowsPerYear));
      } else {
        dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, selectedYear, shows]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showsPerPage);
  };

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSelectChangePerYear = (event) => {
    setSelectedYear(event.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <Select value={selectedGenre} onChange={handleSelectChange}>
        <MenuItem value="All">All</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
      <Select value={selectedYear} onChange={handleSelectChangePerYear}>
        <MenuItem value="All">All</MenuItem>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <ShowsGallery
        shows={searchedShows}
        isReviewsPage
        showsPerPage={showsPerPage}
        from={from}
      />
      <Pagination
        count={count}
        variant="outlined"
        onChange={handleChange}
        shape="rounded"
        className={classes.pagination}
      />
    </div>
  );
}

export default MovieReviews;
