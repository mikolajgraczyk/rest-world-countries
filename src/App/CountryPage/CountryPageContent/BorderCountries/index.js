import {
  StyledBorderCountries,
  BorderCountryTiles,
  BorderCountryTile,
} from "./styled";

const BorderCountries = ({ countries }) => {
  return (
    <StyledBorderCountries>
      Border Countries:
      <BorderCountryTiles>
        {countries.map((country) => {
          return <BorderCountryTile key={country}>{country}</BorderCountryTile>;
        })}
      </BorderCountryTiles>
    </StyledBorderCountries>
  );
};

export default BorderCountries;
