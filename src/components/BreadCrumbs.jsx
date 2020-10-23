import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/movie-reviews", name: "Movie Reviews" },
  { path: "/join-us", name: "Join Us" },
  { path: "/contacts", name: "Contacts" },
];

function BreadCrumbs(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to={routes.path} key={routes.name}>
          {routes.name}
        </Link>
        <Typography></Typography>
      </Breadcrumbs>
    </div>
  );
}

BreadCrumbs.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.func,
    })
  ),
};

export default BreadCrumbs;
