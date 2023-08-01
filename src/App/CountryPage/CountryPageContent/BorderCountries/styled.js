import styled from "styled-components";

export const StyledBorderCountries = styled.div`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.color.text};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 70px;
  align-items: center;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-top: 32px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BorderCountryTiles = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BorderCountryTile = styled.div`
  width: 96px;
  height: 28px;
  border-radius: 2px;
  background: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
