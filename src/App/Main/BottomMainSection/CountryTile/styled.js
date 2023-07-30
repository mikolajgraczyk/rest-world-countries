import styled, { css } from "styled-components";

export const StyledCountryTile = styled.div`
  background: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  transition: 0.2s;

  &:hover{
    transform: scale(1.03);
    box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.09);
  }

  &:active{
    transform: scale(1);
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  }

  ${({ ispreviousdata }) =>
    ispreviousdata === "true" &&
    css`
      opacity: 0.3;
    `}
`;

export const FlagSection = styled.div`
   width: 100%;
   aspect-ratio: 5 / 3;
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomTileSection = styled.div`
  padding: 24px 24px 46px 24px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  color: ${({ theme }) => theme.color.text};
`;

export const MoreInfoSection = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans";
  gap: 8px;
  color: ${({ theme }) => theme.color.text};
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  transition: 0.3s;
`;

export const Info = styled.span`
  font-weight: 600;
`;
