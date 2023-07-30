import { useContext, useState } from "react";
import { MainContext } from "..";
import { nanoid } from "nanoid";
import CountryTile from "./CountryTile";
import { StyledBottomMainSection, Link } from "./styled";
import Pagination from "./Pagination";

const BottomMainSection = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { status, showCountries } = useContext(MainContext);

  const countriesList = showCountries();

  return (
    <>
      {status === "loading" ? "Loading" : ""}
      {status === "error" ? "Country not found" : ""}
      {status === "success" ? (
        <>
          <Link>
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
          </Link>
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
