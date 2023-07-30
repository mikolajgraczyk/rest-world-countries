import { useContext, useEffect } from "react";
import { MainContext } from "../..";
import { StyledPagination, PageButton } from "./styled";

const Pagination = ({ countriesList, setPageNumber }) => {
  let buttonsArray = [];

  const { selectedContinent, query } = useContext(MainContext);
  
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

  return (
    <StyledPagination>
      {buttonsArray.map((button) => {
        return (
          <PageButton key={button} onClick={() => pageButtonHandler(button)}>
            {button}
          </PageButton>
        );
      })}
    </StyledPagination>
  );
};

export default Pagination;
