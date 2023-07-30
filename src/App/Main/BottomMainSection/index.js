import { useContext, useState } from "react";
import { MainContext } from "..";
import { nanoid } from "nanoid";
import CountryTile from "./CountryTile";
import { StyledBottomMainSection } from "./styled";
import Pagination from "./Pagination";

const BottomMainSection = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { status, showCountries } = useContext(MainContext);

  const countriesList = showCountries();

  return (
    <>
      <StyledBottomMainSection>
        {status === "loading" ? "Loading" : ""}
        {status === "error" ? "Country not found" : ""}
        {status === "success" ? (
          <>
            {countriesList.length < 1
              ? "Country not found"
              : countriesList.map((element, index) => {
                  if (
                    index >= pageNumber * 16 &&
                    index <= pageNumber * 16 + 15
                  ) {
                    return <CountryTile key={nanoid()} element={element} />;
                  }
                })}
          </>
        ) : (
          ""
        )}
      </StyledBottomMainSection>
      <Pagination countriesList={countriesList} setPageNumber={setPageNumber} />
    </>
  );
};

export default BottomMainSection;
