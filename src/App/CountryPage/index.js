import { useContext } from "react";
import { DataContext } from "../App";
import { StyledCountryPage } from "./styled";
import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { data } = useContext(DataContext);
  
  const { countryName } = useParams();

  return <StyledCountryPage>TEST</StyledCountryPage>;
};

export default CountryPage;
