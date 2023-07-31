import styled from "styled-components";
import { ReactComponent as BackButtonArrow } from "./BackButtonArrow.svg";

export const StyledCountryPage = styled.main`
  padding: 80px 82px 0px 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 40px 28px 0px 28px;
  }
`;

export const BackButton = styled.button`
  border-radius: 6px;
  background: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
  border: none;
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  line-height: 20px;
  padding: 10px 39px 10px 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    padding: 6px 23px;
    gap: 8px;
    justify-content: center;
  }
`;

export const StyledBackButtonArrow = styled(BackButtonArrow)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 18px;
    height: 18px;
  }
`;
