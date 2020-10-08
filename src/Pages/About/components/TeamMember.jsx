import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  flex: {
    display: "flex",
  },
}));

function TeamMember({ person }) {
  const classes = useStyles();
  const [social] = person.social;
  const soialForMap = Object.entries(social);

  return (
    <div className={classes.large}>
      <Avatar alt={person.name} src={person.avatar} className={classes.large} />
      <h3>{person.name}</h3>
      <span>{person.role}</span>
      <ul className={classes.flex}>
        {soialForMap.map(([name, link]) => (
          <li className={classes.flex}>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <FontAwesomeIcon color="green" icon={["fab", name]} key={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMember;
