import React from "react";
import styles from "./Cards.module.css";
import worldFlag from "./world.png";
import classnames from "classnames";
import { Card, CardContent, Grid } from "@material-ui/core";
const CardFlag = ({ data }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={classnames(styles.card, styles.flag)}
    >
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <img
            style={{ maxWidth: "150px", height: "100px" }}
            src={data.countryInfo ? data.countryInfo.flag : worldFlag}
            alt=""
          />
        </Grid>
      </CardContent>
    </Grid>
  );
};

export default CardFlag;
