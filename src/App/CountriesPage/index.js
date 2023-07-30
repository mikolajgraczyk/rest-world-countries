import { useState, createContext } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import TopMainSection from "./TopMainSection";
import BottomMainSection from "./BottomMainSection";
import { StyledMain, Wrapper } from "./styled";

export const MainContext = createContext();

const CountriesPage = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);

  const { data } = useContext(DataContext);

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
        showCountries,
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

export default CountriesPage;
