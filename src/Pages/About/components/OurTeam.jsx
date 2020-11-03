import React from "react";
import TeamMember from "./TeamMember";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  teammember_styles: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const data = [
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-1.jpg",
    name: "Sarah Stuart",
    role: "Co-founder",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "1",
  },
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-2.jpg",
    name: "John Doe",
    role: "Managing Director",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "2",
  },
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-3.jpg",
    name: "Jessica Branson",
    role: "Reviewer",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "3",
  },
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-4.jpg",
    name: "Matt Olson",
    role: "Consultant",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "4",
  },
];

function OurTeam() {
  const classes = useStyles();

  return (
    <div>
      <h3>Our Team</h3>
      <div className={classes.teammember_styles}>
        {data.map((elem) => (
          <TeamMember person={elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
