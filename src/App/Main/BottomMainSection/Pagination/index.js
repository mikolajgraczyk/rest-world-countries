import { StyledPagination, PageButton } from "./styled";

const Pagination = ({ countriesList, setPageNumber }) => {
  let buttonsArray = [];

  const pagesTotalNumber = Math.ceil(countriesList.length / 16);

  for (let i = 0; i < pagesTotalNumber; i++) {
    buttonsArray = [...buttonsArray, `${i + 1}`];
  }

  const pageButtonHandler = (buttonNumber) => {
    setPageNumber(buttonNumber - 1);
    window.scrollTo(0, 0)
  };

  return (
    <StyledPagination>
      {buttonsArray.map((button) => {
        return (
          <PageButton key={button} onClick={pageButtonHandler(button)}>
            {button}
          </PageButton>
        );
      })}
    </StyledPagination>
  );
};

export default Pagination;
