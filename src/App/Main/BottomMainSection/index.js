import { nanoid } from "nanoid";
import CountryTile from "./CountryTile";
import { StyledBottomMainSection } from "./styled";

const BottomMainSection = ({ status, data }) => {
  return (
    <StyledBottomMainSection>
      {status === "loading" ? "ładowanie" : ""}
      {status === "error" ? "Błąd" : ""}
      {status === "success" ? (
        <>
          {data.map((element) => {
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
