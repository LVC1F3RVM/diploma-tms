import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import background from "./images/background.jpg";

import { Home, About, JoinUs, Contacts, MovieReviews, Show } from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Breadcrumbs from './components/BreadCrumbs';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faGlobe, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { far, faUser } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far, faCheckSquare, faCoffee, faUser, faEnvelope, faGlobe, faPencilAlt);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    "& > *": {
      boxSizing: "border-box",
    },
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
  },
  paper_styles: {
    padding: "2em",
    margin: "50px 200px 70px 200px",
    color: "#84878d",
  },
  header_styles: {
    boxShadow: "none",
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
    <div className={classes.root}>
      <Header routes={routes} className={classes.header_styles}></Header>
      <Paper elevation={5} rounded className={classes.paper_styles}>
        <Breadcrumbs></Breadcrumbs>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
