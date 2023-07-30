import styled, { css } from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 48px;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 70%;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({theme}) => theme.color.secondary};
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.color.primary};
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
  }
`;

export const PageButton = styled.button`
  background: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 12px 16px;
  border: none;
  color: ${({ theme }) => theme.input.text};
  font-weight: bold;
  font-size: 14px;
  transition: 0.3s;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);
  }

  &:active{
    transform: scale(1);
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  }

  ${({ ispageactive }) =>
    ispageactive === "true" &&
    css`
      border: 2px ${({theme}) => theme.color.active} solid;
    `}
`;
