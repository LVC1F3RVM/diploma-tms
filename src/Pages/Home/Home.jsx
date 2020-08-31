import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getShows } from "../../actions/shows";

function Home(props) {
  useEffect(() => {
    props.getShows(1);
  }, []);

  return <div>Home</div>;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getShows: (page) => dispatch(getShows(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
