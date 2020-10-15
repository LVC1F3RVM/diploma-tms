import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    display: "block",
    width: "115px",
    height: "40px",
    background: "#ffaa3c",
    paddingTop: "5px",
    textAlign: "center",
    borderRadius: "5px",
    color: "#92601e",
    appearance: "button",
    lineHeight: "25px",
    textDecoration: "none",
    transition: ".3s ease",
  },
}));

function JoinUsMainContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid>
          <Grid item>
            <h2>Consectetur adipiscing elit sed eiusmod tempor</h2>
            <p>
              Aenean vehicula eget risus sit amet posuere. Maecenas id risus
              maximus, malesuada leo eget, pellentesque arcu. Phasellus vitae
              leo rhoncus, consectetur mauris vitae, lacinia quam. Nunc turpis
              erat, accumsan eget justo quis, auctor ultricies magna. Mauris
              sodales, risus sit amet hendrerit tincidunt, erat ante facilisis
              sapien, sit amet maximus neque massa a felis. Nullam consectetur
              justo massa, vel commodo metus gravida in. Aliquam erat volutpat.
              Nullam a lorem sed lorem euismod gravida a eu velit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec venenatis ac
              ligula vel pharetra. Aenean vitae nulla sed dui volutpat euismod.
            </p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga et harum quidem rerum
              facilis est et expedita.
            </p>
            <p>
              Distinctio nam libero tempore, cum soluta nobis est eligendi optio
              cumque nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <Grid container direction="row">
              <Grid item md={4}>
                <h3>Exceptur cupidat</h3>
                <small>Incididunt labore dolore</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum aut ad optio praesentium amet, ullam vel impedit
                  dignissimos voluptas, consequatur recusandae quo autem
                  consectetur tempore rem quam corrupti a. Accusamus.
                </p>
                <a href="#" className={classes.button}>
                  Send a request
                </a>
              </Grid>
              <Grid item md={4}>
                <h3>Neque quisquam</h3>
                <small>Duis aute reprehenderit</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta aperiam quidem nobis rem exercitationem aut assumenda
                  iure molestias eius accusantium, temporibus quis esse tempora.
                  Laboriosam libero odio nobis, eligendi minus.
                </p>
                <a href="#" className={classes.button}>
                  Send a request
                </a>
              </Grid>
              <Grid item md={4}>
                <h3>Tempor Labore</h3>
                <small>Ratione sequi nesciunt</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  commodi impedit ea beatae, in ipsa doloribus consequuntur ut,
                  quod dolor dolore unde, esse eligendi autem nobis rem tempora
                  recusandae laborum.
                </p>
                <a href="#" className={classes.button}>
                  Send a request
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default JoinUsMainContent;
