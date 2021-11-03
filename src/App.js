import React from "react";
import styles from "./App.module.css";
import { Grid, Box } from "@material-ui/core";
import { Cards, Chart, CountryPicker } from "./components";
import {
  fetchGlobalData,
  fetchCountries,
  fetchHistoricalData,
} from "./api/index";
import GoogleMap from "./components/googleMap/google-map.jsx";
import CardFlag from "./components/Card/CardFlag";
class App extends React.Component {
  state = {
    data: {},
    historicalData: {},
    countries: [],
    country: { lat: 59.95, lng: 30.33 },
  };
  async componentDidMount() {
    const data = await fetchGlobalData();
    const countries = await fetchCountries();
    const chartData = await fetchHistoricalData("all");
    console.log(chartData);
    this.setState({
      data,
      countries,
      historicalData: {
        cases: Object.values(chartData.cases),
        recovered: Object.values(chartData.recovered),
        deaths: Object.values(chartData.deaths),
        dates: Object.keys(chartData.cases),
      },
    });
  }

  handleCountryChange = async (country) => {
    const selected = this.state.countries.filter(
      (data) => data.country === country
    );
    if (country === "global") {
      this.componentDidMount();
    } else {
      fetchHistoricalData(country)
        .then(({ timeline }) => {
          this.setState({
            historicalData: {
              cases: Object.values(timeline.cases),
              recovered: Object.values(timeline.recovered),
              deaths: Object.values(timeline.deaths),
              dates: Object.keys(timeline.cases),
            },
          });
        })
        .catch((err) => {
          this.setState({ historicalData: {} });
        });
      this.setState({
        country: {
          lat: selected[0].countryInfo.lat,
          lng: selected[0].countryInfo.long,
        },
        data: selected[0],
      });
    }
  };
  render() {
    const { data, countries, historicalData, country } = this.state;
    return (
      <Grid
        container
        className={styles.body}
        style={{ height: "100%", width: "100%", position: "relative" }}
      >
        <Grid
          item
          xs={12}
          zIndex="tooltip"
          component={Box}
          className={styles.responsiveCard}
        >
          <Grid container className={styles.responsiveCard}>
            <CardFlag data={data}></CardFlag>
            <Cards
              data={data.cases}
              todayData={data.todayCases}
              name="Infected"
            />
            <Cards
              data={data.recovered}
              todayData={data.todayRecovered}
              name="Recovered"
            />
            <Cards
              data={data.deaths}
              todayData={data.todayDeaths}
              name="Deaths"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          zIndex="tooltip"
          component={Box}
          className={styles.responsiveChart}
        >
          <Grid container direction="row" justify="center" alignItems="stretch">
            <CountryPicker
              countries={countries}
              handleChange={this.handleCountryChange}
            />
            <Chart historicalData={historicalData} data={data} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          className={styles.responsiveMap}
          component={Box}
        >
          <GoogleMap lat={country.lat} lng={country.lng} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
