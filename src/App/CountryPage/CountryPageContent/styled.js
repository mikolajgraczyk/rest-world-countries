import styled from "styled-components";

export const StyledCountryPageContent = styled.div`
  margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 64px;
  }
`;

export const FlagSection = styled.div`
  max-width: 560px;
  max-height: 401px;
  aspect-ratio: 560/401;
  border-radius: 10px;
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 100%;
`;
