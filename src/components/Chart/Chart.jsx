import React, { useEffect, useState } from "react";
import { Line, Bar, defaults } from "react-chartjs-2";
import { Grid } from "@material-ui/core";

import styles from "./Chart.module.css";
defaults.global.maintainAspectRatio = false;

const Chart = (props) => {
  const [dailyData, setDailyData] = useState({});
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  useEffect(() => {
    setDailyData(props.historicalData);
    setData(props.data);
    setCountry(props.country);
  }, [props]);
  const lineChart = dailyData.cases ? (
    <Line
      data={{
        labels: dailyData.dates.map((dates) => dates),
        datasets: [
          {
            data: dailyData.cases.map((cases) => cases),
            label: "Infected",
            borderColor: " rgba(0, 0, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.recovered.map((recovered) => recovered),
            label: "Recovered",
            borderColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.deaths.map((deaths) => deaths),
            label: "Deaths",
            borderColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : (
    <Grid container direction="row" justify="center" alignItems="center">
      Line Chart is unavailable for {data.country}
    </Grid>
  );

  const barChart = data ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [data.cases, data.recovered, data.deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: false, text: `Current statein ${country}` },
      }}
    />
  ) : null;

  return (
    <Grid item xs={12} style={{ backgroundColor: "white" }}>
      <article className={styles.chartMargin} style={{ minHeight: "275px" }}>
        {barChart}
      </article>
      <article className={styles.chartMargin} style={{ minHeight: "275px" }}>
        {lineChart}
      </article>
    </Grid>
  );
};

export default Chart;
