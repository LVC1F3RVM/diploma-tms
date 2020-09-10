import React from "react";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";
import { Grid } from "@material-ui/core";

function ShowsGallery({
  shows,
  showsPerPage = 7,
  isReviewsPage = false,
  from = 0,
}) {
  return (
    <Grid container>
      {shows
        ? shows
            .filter((show, index) => index >= from)
            .filter((show, index) => index < showsPerPage)
            .map((show) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ShowCard
                  src={show.image ? show.image.medium : ""}
                  id={show.id}
                  key={show.id}
                  title={isReviewsPage ? show.name : undefined}
                  description={isReviewsPage && show.summary}
                  isReviewsPage={isReviewsPage}
                />
              </Grid>
            ))
        : null}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  shows: state.show.shows,
});

export default connect(mapStateToProps)(ShowsGallery);
