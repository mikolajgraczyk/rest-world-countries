import axios from "axios";

export const fetchData = (countryName, selectedContinent) => {
  const baseURL = `https://restcountries.com/v3.1`;

  let path = `all`;

  if (countryName) {
    path = `name/${countryName}`;
  }

  if (selectedContinent) {
    path = `region/${selectedContinent}`;
  }

  return axios
    .get(`${baseURL}/${path}`)
    .then((response) => response.data)
    .catch((error) => new Error(error));
};
