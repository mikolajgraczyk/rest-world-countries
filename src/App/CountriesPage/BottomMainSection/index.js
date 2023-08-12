import { useContext, useState } from "react";
import { DataContext } from "../../App";
import { nanoid } from "nanoid";
import CountryTile from "./CountryTile";
import { StyledBottomMainSection } from "./styled";
import Pagination from "./Pagination";

const BottomMainSection = ({ showCountries }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const { status } = useContext(DataContext);

  const countriesList = showCountries();

  return (
    <>
      {status === "loading" ? "Loading" : ""}
      {status === "error" ? "Country not found" : ""}
      {status === "success" ? (
        <>
          <StyledBottomMainSection>
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
          </StyledBottomMainSection>
          <Pagination
            countriesList={countriesList}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BottomMainSection;
