import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(29),
    height: theme.spacing(29),
    margin: "0px 12.5px 30px 12.5px",
  },
  reset_margin: {
    margin: 0,
  },
  flex: {
    display: "flex",
    padding: "0px",
  },
  team_member_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 15px 0px 15px",
  },
}));

function TeamMember({ person }) {
  const classes = useStyles();
  const [social] = person.social;
  const soialForMap = Object.entries(social);

  return (
    <div className={classes.team_member_container}>
      <Avatar alt={person.name} src={person.avatar} className={classes.large} />
      <h3 className={classes.reset_margin}>{person.name}</h3>
      <span className={classes.reset_margin}>{person.role}</span>
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
