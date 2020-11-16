import React from "react";
import {
  Card,
  CardComponent,
  Typography,
  Grid,
  CardContent,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "../Cards/cards.module.css";

const Cards = () => {
 

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" fontFamily="Cochin" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              Value
            </Typography>
            <Typography color="textSecondary">
              Date
            </Typography>
            <Typography variant="body2">No.of Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
             Value
            </Typography>
            <Typography color="textSecondary">
             Date
            </Typography>
            <Typography variant="body2">
              No. of Recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
            Value
            </Typography>
            <Typography color="textSecondary">
             Date
            </Typography>
            <Typography variant="body2" component="p">
              No. of Deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;