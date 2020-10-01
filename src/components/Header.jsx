import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    flexDirection: "row",
    padding: 10,
    background: "white",
    backgroundColor: "transparent",
    "& > *": {
      color: "grey",
      backgroundColor: "white",
    },
  },
  menu_btn: {
    textDecoration: "none",
    padding: "0px 20px 0px 20px",
  },
  btn_grp: {
    padding: 10,
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
      <Grid item xs={5} className={classes.resetPadding}>
        <AppBar position="static" className={classes.nav}>
          <ButtonGroup
            variant="contained"
            className={classes.btn_grp}
            aria-label="contained primary button group"
          >
            {routes.map((elem) => (
              <Link to={elem.path} key={elem.name} className={classes.menu_btn}>
                {elem.name}
              </Link>
            ))}
          </ButtonGroup>
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
