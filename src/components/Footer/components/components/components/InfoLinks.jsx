import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  info_links: {
    listStyle: "none",
    margin: 0,
    paddingLeft: 0,
  },
  link_styles: {
    textDecoration: "none",
  },
});

function InfoLinks({ info }) {
  const classes = useStyles();

  const modifiedInfo = info.map((elem) => {
    if (elem.link.startsWith("/")) {
      return {
        ...elem,
        inner: true,
      };
    } else {
      return {
        ...elem,
        inner: false,
      };
    }
  });

  return (
    <ul className={classes.info_links}>
      {modifiedInfo.map((elem, id) => (
        <li key={id}>
          {elem.inner ? (
            <Link to={elem.link} className={classes.link_styles}>
              {elem.text}
            </Link>
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://${elem.link}`}
            >
              {elem.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default InfoLinks;
