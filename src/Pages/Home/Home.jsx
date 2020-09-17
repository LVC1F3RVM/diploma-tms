import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShows } from "../../actions/shows";
import { getPremieres } from "../../actions/premieres";
import ShowsGallery from "../../components/ShowsGallery";
import { makeStyles } from "@material-ui/styles";
import Premieres from "./components/Premieres";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.show.shows);
  useEffect(() => {
    dispatch(getShows(1));
    dispatch(getPremieres());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <ShowsGallery shows={shows} />

      <Premieres />
    </div>
  );
}

export default Home;
