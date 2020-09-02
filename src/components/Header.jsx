import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    flexDirection: "row",
    
  },
})

function Header(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <Grid container justify="space-between">
      <Grid item xs={2}>
        Logo
      </Grid>
      <Grid item xs={6}>
        <AppBar position="static" className={classes.nav}>
          {routes.map((elem) => {
            return (
                <div>
                  <Button variant="contained" href={elem.path} key={elem.name}>
                    {elem.name}
                  </Button>
                </div>
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
