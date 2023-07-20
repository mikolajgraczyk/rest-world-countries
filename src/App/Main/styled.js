import styled from "styled-components";
import { ReactComponent as InputIcon } from "./InputIcon.svg";
import { ReactComponent as SelectIcon } from "./SelectIcon.svg";

export const StyledMain = styled.main`
  background: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;

export const Wrapper = styled.div`
  padding: 48px 80px 45px 80px;
  max-width: 1440px;
  margin: 0 auto;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    padding: 24px 16px 65px 16px;
  };
`;

export const TopSection = styled.div`
  display: flex;
  gap: 140px;
  align-items: center;
  justify-content: space-between;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    gap: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 480px;
  width: 100%;
  padding-left: 32px;
  height: 56px;
  background: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  transition: 0.3s;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    max-width: none;
    height: 48px;
  }
`;

export const StyledInputIcon = styled(InputIcon)`
  color: ${({ theme }) => theme.input.icon};
  transition: 0.3s;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.input.text};
  transition: 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.input.text};
  }
`;

export const CountrySelectButton = styled.button`
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

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    padding: 14px 19px 14px 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.select.text};
  font-size: 14px;
  line-height: 20px;
  transition: 0.3s;
`;

export const StyledSelectIcon = styled(SelectIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 10px;
    height: 10px;
  }
`;
