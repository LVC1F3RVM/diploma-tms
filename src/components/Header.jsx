import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const useStyles = makeStyles({
  site_header: {
    padding: "50px 0",
    zoom: 1,
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    justifyContent: "space-between",
    "& > *": {
      zoom: 1,
    },
  },
  logo_copy: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
  },
  logo_copy_text: {
    color: "white",
  },
  site_title: {
    margin: 0,
    textTransform: "uppercase",
    fontSize: "1em",
  },
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    background: "white",
    backgroundColor: "transparent",

    "& > *": {
      color: "grey",
      backgroundColor: "white",
    },
  },
  menu_btn: {
    textDecoration: "none",
    padding: "10px 15px 10px 15px",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#ffaa3c",
      borderColor: "#ffb43c",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ff8112",
      borderColor: "#ffb43c",
    },
  },
});

function Header(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <div className={classes.site_header}>
      <Grid
        container
        alignContent="center"
        xs={9}
        sm={11}
        md={11}
        lg={9}
        xl={6}
        className={classes.container}
      >
        <Grid item>
          <a href="#" className={classes.logo_copy}>
            <img src={logo} alt="Logo" id="branding" />
            <Grid direction="column" className={classes.logo_copy_text}>
              <h1 className={classes.site_title}>Company Name</h1>
              <small>Tagline goes here</small>
            </Grid>
          </a>
        </Grid>
        <Grid item className={classes.resetPadding}>
          <AppBar position="static" className={classes.nav}>
            <ButtonGroup
              variant="contained"
              aria-label="contained primary button group"
              size="small"
              className={classes.btn_grp}
            >
              {routes.map((elem) => (
                <Link
                  to={elem.path}
                  key={elem.name}
                  className={classes.menu_btn}
                >
                  {elem.name}
                </Link>
              ))}
            </ButtonGroup>
          </AppBar>
        </Grid>
      </Grid>
    </div>
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
