import axios from "axios";

export const fetchData = (countryName) => {
  const baseURL = `https://restcountries.com/v3.1`;

  let path = `all`;

  if (countryName) {
    path = `name/${countryName}`;
  }

  return axios.get(`${baseURL}/${path}`).then((response) => response.data);
};
