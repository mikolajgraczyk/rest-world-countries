import styled from "styled-components";

export const StyledMain = styled.main`
  transition: 0.3s;
`;

export const Wrapper = styled.div`
  padding: 48px 80px 45px 80px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 24px 16px 65px 16px;
  }
`;


