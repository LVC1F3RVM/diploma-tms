import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contacts_detail: {
    listStyle: "none",
    marginBottom: "30px",
    paddingLeft: 0,
  },
}));

function ContactsDetail() {
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.contacts_detail}>
        <li>
          <address>
            <span>Company name. INC</span>
            <br />
            <span>550 Avenue Street, New york</span>
          </address>
        </li>
        <li>
          <a href="tel:1590912831">+1 590 912 831</a>
        </li>
        <li>
          <a href="mailto:contact@companyname.com">contact@companyname.com</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactsDetail;
