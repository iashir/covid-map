import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import classnames from "classnames";
const Cards = ({ data, todayData, name }) => {
  if (!data)
    return (
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={classnames(styles.card, styles[name])}
      >
        <CardContent>
          <Grid container direction="row" justify="center" alignItems="center">
            Loading...
          </Grid>
        </CardContent>
      </Grid>
    );
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={classnames(styles.card, styles[name])}
    >
      <CardContent>
        <Typography color="textSecondary" align="center" gutterBottom>
          {name}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography color="textSecondary" align="center" gutterBottom>
              Today
            </Typography>
            <Typography align="center" variant="h5">
              <CountUp start={0} end={todayData} duration={1.5} separator="," />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="textSecondary" align="center" gutterBottom>
              Total
            </Typography>
            <Typography align="center" variant="h5">
              <CountUp start={0} end={data} duration={1.5} separator="," />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Grid>
    // <Grid
    //   item
    //   component={Card}
    //   xs={12}
    //   md={3}
    //   className={classnames(styles.card, styles.recovered)}
    // >
    //   <CardContent>
    //     <Typography color="textSecondary" align="center" gutterBottom>
    //       Recovered
    //     </Typography>
    //     <Grid container>
    //       <Grid item xs={6}>
    //         <Typography color="textSecondary" align="center" gutterBottom>
    //           Today
    //         </Typography>
    //         <Typography align="center" variant="h5">
    //           <CountUp
    //             start={0}
    //             end={data.todayRecovered}
    //             duration={1.5}
    //             separator=","
    //           />
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <Typography color="textSecondary" align="center" gutterBottom>
    //           Total
    //         </Typography>
    //         <Typography align="center" variant="h5">
    //           <CountUp
    //             start={0}
    //             end={data.recovered}
    //             duration={1.5}
    //             separator=","
    //           />
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </CardContent>
    // </Grid>
    // <Grid
    //   item
    //   component={Card}
    //   xs={12}
    //   md={3}
    //   className={classnames(styles.card, styles.deaths)}
    // >
    //   <CardContent>
    //     <Typography color="textSecondary" align="center" gutterBottom>
    //       Deaths
    //     </Typography>
    //     <Grid container>
    //       <Grid item xs={6}>
    //         <Typography color="textSecondary" align="center" gutterBottom>
    //           Today
    //         </Typography>
    //         <Typography align="center" variant="h5">
    //           <CountUp
    //             start={0}
    //             end={data.todayDeaths}
    //             duration={1.5}
    //             separator=","
    //           />
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <Typography color="textSecondary" align="center" gutterBottom>
    //           Total
    //         </Typography>
    //         <Typography align="center" variant="h5">
    //           <CountUp
    //             start={0}
    //             end={data.deaths}
    //             duration={1.5}
    //             separator=","
    //           />
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </CardContent>
    // </Grid>
  );
};

export default Cards;
