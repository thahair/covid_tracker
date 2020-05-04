import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountrieNames, setFetchCountriesNames] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountriesNames(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchCountriesNames]);

  console.log(fetchCountrieNames);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {fetchCountrieNames.length
          ? fetchCountrieNames.map((countryName, index) => (
              <option key={index} value={countryName}>
                {countryName}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
