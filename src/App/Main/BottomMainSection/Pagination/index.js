import { StyledPagination, PageButton } from "./styled";

const Pagination = ({ countriesList, setPageNumber }) => {
  let buttonsArray = [];

  const pagesTotalNumber = Math.ceil(countriesList.length / 16);

  for (let i = 0; i < pagesTotalNumber; i++) {
    buttonsArray = [...buttonsArray, `${i + 1}`];
  }

  return (
    <StyledPagination>
      {buttonsArray.map((button) => {
        return (
          <PageButton key={button} onClick={() => setPageNumber(button - 1)}>
            {button}
          </PageButton>
        );
      })}
    </StyledPagination>
  );
};

export default Pagination;
