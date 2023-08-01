import styled from "styled-components";

export const StyledCountryPageContent = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 100px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 64px;
    flex-direction: column;
    align-items: center;
    gap: 44px;
  }
`;

export const FlagSection = styled.div`
  max-width: 560px;
  max-height: 401px;
  min-width: 300px;
  aspect-ratio: 560/401;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 400px;
    min-width: 0;
  }
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 574px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 16px;
  }
`;

export const CountryName = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: 32px;
  font-weight: 800;
  line-height: normal;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
  }
`;

export const CountryDetails = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.color.text};
  line-height: 32px;
  margin: 0;
  margin-top: 23px;
  padding: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-top: 16px;
    gap: 32px;
    font-size: 14px;
  }
`;
