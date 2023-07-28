import { nanoid } from "nanoid";
import CountryTile from "./CountryTile";
import { StyledBottomMainSection } from "./styled";

const BottomMainSection = ({ status, showCountries }) => {
  return (
    <StyledBottomMainSection>
      {status === "loading" ? "Loading" : ""}
      {status === "error" ? "Country not found" : ""}
      {status === "success" ? (
        <>
          {showCountries().length < 1
            ? "Country not found"
            : showCountries().map((element) => {
                return <CountryTile key={nanoid()} element={element} />;
              })}
        </>
      ) : (
        ""
      )}
    </StyledBottomMainSection>
  );
};

export default BottomMainSection;
