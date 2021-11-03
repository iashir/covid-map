import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Grid } from "@material-ui/core";
const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    setCountries(props.countries);
  }, [props]);
  if (!countries) return null;
  return (
    <Grid container justify="center" style={{ backgroundColor: "white" }}>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => props.handleChange(e.target.value)}
        >
          <option value="global">Global</option>
          {countries.map((data, i) => (
            <option key={i} value={data.country}>
              {data.country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Grid>
  );
};

export default CountryPicker;
