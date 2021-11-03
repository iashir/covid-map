import axios from "axios";
const url = "https://disease.sh/v3/covid-19/";
const historical = "https://disease.sh/v3/covid-19/historical/";

export const fetchGlobalData = async () => {
  try {
    const { data } = await axios.get(`${url}all`);
    return data;
  } catch (err) {
    return;
  }
};

export const fetchHistoricalData = async (arg = "") => {
  try {
    const { data } = await axios.get(historical + arg);
    return data;
  } catch (err) {
    return;
  }
};
export const fetchCountries = async (arg = "") => {
  try {
    const { data } = await axios.get(`${url}countries/${arg}`);
    return data;
  } catch (err) {
    return;
  }
};
