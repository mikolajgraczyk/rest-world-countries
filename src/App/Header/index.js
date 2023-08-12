import { useContext } from "react";
import { DataContext } from "../App";
import {
  StyledHeader,
  Wrapper,
  TitleButton,
  Title,
  ThemeSwitch,
  StyledSwitchIcon,
  SwitchText,
} from "./styled";

const Header = ({ switchTheme }) => {
  const { searchParams, setSearchParams, setSelectedContinent } =
    useContext(DataContext);

  const TitleButtonHandler = () => {
    searchParams.delete("search");
    setSearchParams(searchParams);

    setSelectedContinent(null);
  };

  return (
    <StyledHeader>
      <Wrapper>
        <TitleButton onClick={TitleButtonHandler}>
          <Title>Where in the world?</Title>
        </TitleButton>
        <ThemeSwitch onClick={switchTheme}>
          <StyledSwitchIcon />
          <SwitchText>Dark Mode</SwitchText>
        </ThemeSwitch>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
