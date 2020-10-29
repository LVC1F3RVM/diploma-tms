import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    flexWrap: "wrap",
  },
  header_styles: {
    paddingTop: "50px",
  },
  container_styles: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 205px 0px 205px",
    padding: "0px 10px 0 10px",
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
    boxShadow: "none",
    "& > *": {
      color: "grey",
      backgroundColor: "white",
    },
  },
  menu_btn: {
    textDecoration: "none",
    padding: "0px 15px 0px 15px",
  },
  btn_grp: {
    padding: "10px 0 10px 0",
  },
});

function Header(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.header_styles}>
        <Grid container className={classes.container_styles}>
          <Grid item xs={4} md={3}>
            <a href="#" className={classes.logo_copy}>
              <img src={logo} alt="Logo" id="branding" />
              <Grid
                container
                direction="column"
                className={classes.logo_copy_text}
              >
                <h1 className={classes.site_title}>Company Name</h1>
                <small>Tagline goes here</small>
              </Grid>
            </a>
          </Grid>
          <Grid item xs={8} md={5} className={classes.resetPadding}>
            <AppBar position="static" className={classes.nav}>
              <ButtonGroup
                variant="contained"
                className={classes.btn_grp}
                aria-label="contained primary button group"
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
