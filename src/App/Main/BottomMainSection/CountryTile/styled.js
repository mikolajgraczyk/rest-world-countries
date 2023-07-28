import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledCountryTile = styled(NavLink)`
  background-color: ${({theme}) => theme.color.secondary};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;

  &:link {
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
  }

  &:visited {
    color: ${({ theme }) => theme.color.text};
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
`;
