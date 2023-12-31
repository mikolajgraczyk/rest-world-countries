import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import {
  StyledCountryPage,
  BackButton,
  StyledBackButtonArrow,
} from "./styled";
import { useParams, useNavigate } from "react-router-dom";
import CountryPageContent from "./CountryPageContent";

const CountryPage = () => {
  const { data, status } = useContext(DataContext);
  const { countryName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  if (status === "success") {
    const selectedCountryData = data.filter((element) => {
      return element.name.common === countryName;
    });

    return (
      <StyledCountryPage>
        <BackButton onClick={() => navigate(-1)}>
          <StyledBackButtonArrow />
          Back
        </BackButton>
        <CountryPageContent selectedCountryData={selectedCountryData[0]} />
      </StyledCountryPage>
    );
  }
};

export default CountryPage;
