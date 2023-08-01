import { useContext, useEffect } from "react";
import { MainContext } from "../..";
import { DataContext } from "../../../App";
import { StyledPagination, PageButton } from "./styled";

const Pagination = ({ countriesList, setPageNumber, pageNumber }) => {
  let buttonsArray = [];

  const { selectedContinent } = useContext(MainContext);
  const { query } = useContext(DataContext);

  useEffect(() => {
    setPageNumber(0);
  }, [selectedContinent, query]);

  const pagesTotalNumber = Math.ceil(countriesList.length / 16);

  for (let i = 0; i < pagesTotalNumber; i++) {
    buttonsArray = [...buttonsArray, `${i + 1}`];
  }

  const pageButtonHandler = (buttonNumber) => {
    setPageNumber(buttonNumber - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isPageActive = (buttonNumber) => {
    return buttonNumber - 1 === pageNumber;
  };

  return (
    <StyledPagination>
      {buttonsArray.map((button) => {
        const ispageactive = isPageActive(button);

        return (
          <PageButton
            key={button}
            onClick={() => pageButtonHandler(button)}
            ispageactive={ispageactive ? "true" : "false"}
          >
            {button}
          </PageButton>
        );
      })}
    </StyledPagination>
  );
};

export default Pagination;
