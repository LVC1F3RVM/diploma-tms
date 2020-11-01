import React from "react";
import { Grid } from "@material-ui/core";
import FooterPage from "./components/FooterPage";
import { makeStyles } from "@material-ui/core/styles";

const footerData = [
  {
    title: "About us",
    info: {
      type: "text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt saepe cupiditate",
    },
  },
  {
    title: "Recent Review",
    info: {
      type: "array",
      description: [
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/1",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/2",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/3",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/4",
        },
      ],
    },
  },
  {
    title: "Help Center",
    info: {
      type: "array",
      description: [
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/1",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/2",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/3",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/4",
        },
      ],
    },
  },
  {
    title: "Join Us",
    info: {
      type: "array",
      description: [
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/1",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/2",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/3",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/reviews/4",
        },
      ],
    },
  },
  {
    title: "Social Media",
    info: {
      type: "array",
      description: [
        {
          text: "Facebook",
          link: "facebook.com",
        },
        {
          text: "Twitter",
          link: "twitter.com",
        },
        {
          text: "Google+",
          link: "google.com",
        },
        {
          text: "Pinterest",
          link: "pinterest.com",
        },
      ],
    },
  },
  {
    title: "Newsletter",
    info: {
      type: "form",
      formType: "email",
    },
  },
];

const useStyles = makeStyles({
  site_footer: {
    padding: "50px 0",
    zoom: 1,
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    justifyContent: "space-between",
    listStyle: "none",
    "& > *": {
      zoom: 1,
    },
  },
  footer_page: {
    listStyle: "none",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.site_footer}>
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
        {footerData.map((elem) => (
          <Grid item md={2} sm={12} key={elem.title}>
            <FooterPage title={elem.title} info={elem.info} />
          </Grid>
        ))}
      </Grid>
      <p style={{ textAlign: "center" }}>
        Copyright 2014 Company name, Designed by Themezy. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
