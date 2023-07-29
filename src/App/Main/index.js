import { useState, createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetchData";
import TopMainSection from "./TopMainSection";
import BottomMainSection from "./BottomMainSection";
import { useSearchParams } from "react-router-dom";
import { StyledMain, Wrapper } from "./styled";

export const MainContext = createContext();

const Main = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { status, data, isPreviousData } = useQuery(["countries", query], () =>
    fetchData(query)
  );

  const showCountries = () => {
    let countryList = data;

    if (selectedContinent) {
      countryList = data.filter((country) =>
        country.region.toLowerCase().includes(selectedContinent.toLowerCase())
      );
    }

    return countryList;
  };

  return (
    <MainContext.Provider
      value={{
        selectedContinent,
        setSelectedContinent,
        searchParams,
        setSearchParams,
        status,
        query,
        showCountries,
        isPreviousData,
      }}
    >
      <StyledMain>
        <Wrapper>
          <TopMainSection />
          <BottomMainSection />
        </Wrapper>
      </StyledMain>
    </MainContext.Provider>
  );
};

export default Main;
