import { StyledCountryPage } from "./styled";
import { useParams } from "react-router-dom";

const CountryPage = () => {

    const {countryName} = useParams();
    console.log(countryName);

    return(
        <StyledCountryPage>
TEST
        </StyledCountryPage>
    );
};

export default CountryPage;