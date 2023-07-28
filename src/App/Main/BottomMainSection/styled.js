import styled from "styled-components";

export const StyledBottomMainSection = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 72px;
  margin-top: 48px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    margin-top: 32px;
  }
`;
