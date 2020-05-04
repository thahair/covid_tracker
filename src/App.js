import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { Typography, Grid } from "@material-ui/core";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (countryName) => {
    const fetchedData = await fetchData(countryName);
    this.setState({ data: fetchedData, country: countryName });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Grid item xs={12} md={12}>
          <Typography className={styles.heading} variant="h4">
            Learn in Lockdown
          </Typography>
        </Grid>
        <Cards cards={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
