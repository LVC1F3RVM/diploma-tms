import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    flexDirection: "row",
    padding: 10,
    color: "gray",
  },
  menu_btn: {
    textDecoration: "none",
  },
});

function Header(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <Grid container justify="space-between">
      <Grid item xs={2}>
        Logo
      </Grid>
      <Grid item xs={6} className={classes.resetPadding}>
        <AppBar position="static" className={classes.nav}>
          {routes.map((elem) => (
            <Link to={elem.path} key={elem.name} className={classes.menu_btn}>
              {elem.name}
            </Link>
          ))}
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
