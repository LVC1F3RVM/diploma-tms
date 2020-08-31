import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(props) {
  const { routes } = props;

  return (
    <Grid container justify="space-between">
      <Grid item xs={2}>
        Logo
      </Grid>
      <Grid item xs={6}>
        <AppBar position="static">
          {routes.map((elem) => {
            console.log(elem);
            return (
              <Link to={elem.path} key={elem.name}>
                {elem.name}
              </Link>
            );
          })}
        </AppBar>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.func,
    })
  ),
};

export default Header;
