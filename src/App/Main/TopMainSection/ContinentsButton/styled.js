import styled, { css } from "styled-components";
import { ReactComponent as SelectIcon } from "./SelectIcon.svg";

export const ContinentSelectButton = styled.button`
  background: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 18px 22px 18px 24px;
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.select.text};
  transition: 0.3s;
  transition: transform 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 14px 19px 14px 24px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

export const StyledSelectIcon = styled(SelectIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 10px;
    height: 10px;
  }
`;

export const ContinentsList = styled.ul`
  position: absolute;
  top: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 200px;
  right: 0;
  padding: 16px 0 16px 0;
  background: ${({ theme }) => theme.color.secondary};
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    left: 0;
    top: 124px;
  }
`;

export const ListElement = styled.li`
  list-style: none;
  width: 100%;
`;

export const ListElementButton = styled.button`
  background: ${({ theme }) => theme.color.secondary};
  width: 100%;
  text-align: left;
  padding: 0 24px 0 24px;
  border: none;
  color: ${({ theme }) => theme.select.text};
  font-size: 14px;
  line-height: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    font-size: 16px;
  }

  &:active{
    font-size: 14px;
  }

  ${({ isselected }) => isselected === "true" && css`
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.color.active};
  `}
`;
