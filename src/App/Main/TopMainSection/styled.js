import styled from "styled-components";
import { ReactComponent as InputIcon } from "./InputIcon.svg";

export const StyledTopMainSection = styled.div`
  display: flex;
  gap: 140px;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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

  &:focus {
    outline: none;
  }
`;