import { useContext } from "react";
import { DataContext } from "../../../App";
import { addComasToNumber } from "../../../addComasToNumber";
import {
  StyledLink,
  StyledCountryTile,
  FlagSection,
  FlagImage,
  BottomTileSection,
  Name,
  MoreInfoSection,
  Info,
} from "./styled";

const CountryTile = ({ element }) => {
  const { isPreviousData } = useContext(DataContext);

  return (
    <StyledLink to={`/country/${element.name.common}`}>
      <StyledCountryTile ispreviousdata={isPreviousData ? "true" : "false"}>
        <FlagSection>
          <FlagImage src={element.flags.svg} alt="" />
        </FlagSection>
        <BottomTileSection>
          <Name>{element.name.common}</Name>
          <MoreInfoSection>
            <div>
              <Info>Population:</Info> {addComasToNumber(element.population)}
            </div>
            <div>
              <Info>Region:</Info> {element.region}
            </div>
            <div>
              <Info>Capital:</Info> {element.capital}
            </div>
          </MoreInfoSection>
        </BottomTileSection>
      </StyledCountryTile>
    </StyledLink>
  );
};

export default CountryTile;
