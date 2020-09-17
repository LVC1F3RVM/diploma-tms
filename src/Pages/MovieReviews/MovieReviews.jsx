import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from "@material-ui/lab";
import { Select, MenuItem } from "@material-ui/core";

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
      const genresSet = new Set(shows.flatMap((show) => show.genres));
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
      const yearsSet = new Set(shows.flatMap((show) => show.premiered));
      setYears([...yearsSet.values()]);
      setCount(Math.ceil(shows.length / showsPerPage));
    }
  }, [dispatch, shows]);

  useEffect(() => {
    if (shows) {
      if (selectedYear !== ALL_YEARS) {
        const filteredShowsPerYear = shows.filter((show) =>
          show.premiered.includes(selectedYear)
        );
        dispatch(setSearchedShows(filteredShowsPerYear));
      } else {
        dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, years, selectedYear, shows]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showsPerPage);
  };

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSelectChangePerYear = (event) => {
    setSelectedYear(event.target.value);
  };
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
      />
    </div>
  );
}

export default MovieReviews;
