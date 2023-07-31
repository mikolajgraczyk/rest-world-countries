import { useContext } from "react";
import { DataContext } from "../App";
import { StyledCountryPage, BackButton, StyledBackButtonArrow } from "./styled";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import CountryPageContent from "./CountryPageContent";

const CountryPage = () => {
  const { data, status } = useContext(DataContext);
  const { countryName } = useParams();

  if (status === "success") {
    const selectedCountryData = data.filter((element) => {
      return element.name.common === countryName;
    });

    return (
      <StyledCountryPage>
        <BackButton>
          <StyledBackButtonArrow />
          Back
        </BackButton>
        <CountryPageContent selectedCountryData={selectedCountryData}/>
      </StyledCountryPage>
    );
  }
};

export default CountryPage;
