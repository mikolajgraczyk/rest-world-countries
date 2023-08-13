import { useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
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
  const { searchParams, setSearchParams, setSelectedContinent, setPageNumber } =
    useContext(DataContext);

  const navigate = useNavigate();

  const TitleButtonHandler = () => {
    searchParams.delete("search");
    setSearchParams(searchParams);
    setPageNumber(0);
    navigate("/countries");
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
