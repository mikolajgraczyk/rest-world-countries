import { StyledCountryTile, Name } from "./styled";

const CountryTile = ({ element }) => {
    
    return(
        <StyledCountryTile>
            <Name>{element.name.common}</Name>
        </StyledCountryTile>
    );
};

export default CountryTile;