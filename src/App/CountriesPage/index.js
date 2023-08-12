import { useContext } from "react";
import { DataContext } from "../App";
import TopMainSection from "./TopMainSection";
import BottomMainSection from "./BottomMainSection";
import { StyledMain, Wrapper } from "./styled";

const CountriesPage = () => {
  const { data, selectedContinent } = useContext(DataContext);

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
    <StyledMain>
      <Wrapper>
        <TopMainSection />
        <BottomMainSection showCountries={showCountries} />
      </Wrapper>
    </StyledMain>
  );
};

export default CountriesPage;
