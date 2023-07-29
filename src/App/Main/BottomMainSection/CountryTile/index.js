import { useContext } from "react";
import { MainContext } from "../..";
import { StyledCountryTile, Name } from "./styled";

const CountryTile = ({ element }) => {
  const { isPreviousData } = useContext(MainContext);

  return (
    <StyledCountryTile ispreviousdata={isPreviousData ? "true" : "false"}>
      <Name>{element.name.common}</Name>
    </StyledCountryTile>
  );
};

export default CountryTile;
