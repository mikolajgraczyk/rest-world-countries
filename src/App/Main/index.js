import { useState } from "react";
import {
  StyledMain,
  Wrapper,
  TopSection,
  InputBar,
  StyledInputIcon,
  Input,
  CountrySelectButton,
  Text,
  StyledSelectIcon,
} from "./styled";

const Main = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const expandList = () => {
    setIsListVisible((prevState) => !prevState);
  };

  return (
    <StyledMain>
      <Wrapper>
        <TopSection>
          <InputBar>
            <StyledInputIcon />
            <Input placeholder={"Search for a country…"} />
          </InputBar>
          <CountrySelectButton onClick={expandList}>
            <Text>Filter by Region</Text>
            <StyledSelectIcon />
          </CountrySelectButton>
        </TopSection>
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
