import styled from "styled-components";
import { ReactComponent as SwitchIcon } from "./SwitchIcon.svg";

export const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.color.secondary};
  transition: 0.3s;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 23px 80px 24px 81px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 30px 16px 30px 16px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.text};
  font-size: 24px;
  font-weight: 800;
  line-height: normal;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ThemeSwitch = styled.button`
  color: ${({ theme }) => theme.color.text};
  font-weight: 600;
  line-height: normal;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledSwitchIcon = styled(SwitchIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const SwitchText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: normal;
  }
`;
