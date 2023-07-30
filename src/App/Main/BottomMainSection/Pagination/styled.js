import styled from "styled-components";

export const StyledPagination = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 48px;
    gap: 8px;
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

  &:hover {
    cursor: pointer;
  }
`;
