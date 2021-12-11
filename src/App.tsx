import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { Home, About, JoinUs, Contacts, MovieReviews, Show } from "./Pages";
import { Header } from "./components/Header";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faGlobe,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { far, faUser } from "@fortawesome/free-regular-svg-icons";

library.add(
  fab,
  far,
  faCheckSquare,
  faCoffee,
  faUser,
  faEnvelope,
  faGlobe,
  faPencilAlt
);

const useStyles = makeStyles({
  site_content: {},
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    "& > *": {
      zoom: 1,
    },
  },
  paper_styles: {
    padding: "2em",
    color: "#84878d",
    width: "auto",
  },
});

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/movie-reviews", name: "Movie Reviews", component: MovieReviews },
  { path: "/join-us", name: "Join Us", component: JoinUs },
  { path: "/contacts", name: "Contacts", component: Contacts },
];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.site_content}>
      <Header routes={routes}></Header>
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
        <Paper elevation={5} rounded className={classes.paper_styles}>
          <Switch>
            {routes.map((elem) => (
              <Route
                path={elem.path}
                exact
                component={elem.component}
                key={elem.name}
              />
            ))}
            <Route path={"/show/:id"} exact component={Show}></Route>

            <Route> 404 not found </Route>
          </Switch>
        </Paper>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
