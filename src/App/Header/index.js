import {
  StyledHeader,
  Wrapper,
  Title,
  ThemeSwitch,
  StyledSwitchIcon,
  SwitchText,
} from "./styled";

const Header = ({ switchTheme }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <Title>Where in the world?</Title>
        <ThemeSwitch onClick={switchTheme}>
          <StyledSwitchIcon />
          <SwitchText>Dark Mode</SwitchText>
        </ThemeSwitch>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
