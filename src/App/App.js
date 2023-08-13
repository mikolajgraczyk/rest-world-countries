import { createContext } from "react";
import Header from "./Header";
import CountriesPage from "./CountriesPage";
import CountryPage from "./CountryPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetchData";
import { useSearchParams } from "react-router-dom";

export const DataContext = createContext();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const switchTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { status, data, isPreviousData } = useQuery(["countries", query], () =>
    fetchData(query)
  );

  return (
    <DataContext.Provider
      value={{
        searchParams,
        setSearchParams,
        selectedContinent,
        setSelectedContinent,
        pageNumber,
        setPageNumber,
        status,
        query,
        isPreviousData,
        data,
      }}
    >
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
          <Header switchTheme={switchTheme} />
          <Routes>
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/country/:countryName" element={<CountryPage />} />
            <Route path="/" element={<Navigate to="/countries" />} />
            <Route path="*" element={<Navigate to="/countries" />} />
          </Routes>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
