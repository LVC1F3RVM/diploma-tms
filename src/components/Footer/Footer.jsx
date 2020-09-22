import React from "react";
import { Grid } from "@material-ui/core";
import FooterPage from "./components/FooterPage";

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
          link: "/revews/1",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/2",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/3",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/4",
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
          link: "/revews/1",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/2",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/3",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/4",
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
          link: "/revews/1",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/2",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/3",
        },
        {
          text: "Lorem ipsum dolor",
          link: "/revews/4",
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

function Footer() {
  return (
    <div>
      <Grid container>
        {footerData.map((elem) => (
          <Grid item md={2} sm={12} key={elem.title}>
            <FooterPage title={elem.title} info={elem.info} />
          </Grid>
        ))}
      </Grid>
      <p>
        Copyright 2014 Company name, Designed by Themezy. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
