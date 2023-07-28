import { StyledCountryTile } from "./styled";

const CountryTile = ({ element }) => {
    return(
        <StyledCountryTile>
            {element.name.official}
        </StyledCountryTile>
    );
};

export default CountryTile;