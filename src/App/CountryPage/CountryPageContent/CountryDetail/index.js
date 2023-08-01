import { StyledCountryDetail, DetailValue } from "./styled";

const CountryDetail = ({ detailName, detailValue }) => {
  return(
    <StyledCountryDetail>
        {detailName} <DetailValue>{detailValue}</DetailValue>
    </StyledCountryDetail>
  );
};

export default CountryDetail;
