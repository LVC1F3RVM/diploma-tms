import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShows } from "../../actions/shows";
import { getPremieres } from "../../actions/premieres";
import ShowsGallery from "../../components/ShowsGallery";
import Premieres from "./components/Premieres";

function Home(props) {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.show.shows);
  useEffect(() => {
    dispatch(getShows(1));
    dispatch(getPremieres());
  }, [dispatch]);

  return (
    <div>
      <ShowsGallery shows={shows} />

      <Premieres />
    </div>
  );
}

export default Home;
