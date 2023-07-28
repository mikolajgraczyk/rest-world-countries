import styled from "styled-components";

export const StyledBottomMainSection = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: space-between;
  gap: 74px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 32px;
    justify-content: center;
  }
`;
