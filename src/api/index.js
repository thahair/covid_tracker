import axios from "axios"; //axios is used to make api requests

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (countryName) => {
  let dynamicURL = url;

  if (countryName) {
    dynamicURL = `${url}/countries/${countryName}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicURL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    let tempCountries = response.data.countries;
    let countryNames = [];
    tempCountries.map((country, i) => countryNames.push(country.name));
    return countryNames;
  } catch (error) {
    console.log(error);
  }
};
