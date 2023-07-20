import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import CountryTile from "./CountryTile";
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
  ContinentsList,
  ListElement,
  ListElementButton,
} from "./styled";

const Main = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const expandList = () => {
    setIsListVisible((prevState) => !prevState);
  };

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      new Error(response.statusText);
      return;
    }

    return await response.json();
  };

  const { status, data } = useQuery(["countries"], fetchData);

  if (data) {
    console.log(data);
  }

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
          {isListVisible ? (
            <ContinentsList>
              <ListElement>
                <ListElementButton>Africa</ListElementButton>
              </ListElement>
              <ListElement>
                <ListElementButton>America</ListElementButton>
              </ListElement>
              <ListElement>
                <ListElementButton>Asia</ListElementButton>
              </ListElement>
              <ListElement>
                <ListElementButton>Europe</ListElementButton>
              </ListElement>
              <ListElement>
                <ListElementButton>Oceania</ListElementButton>
              </ListElement>
            </ContinentsList>
          ) : (
            ""
          )}
        </TopSection>
        {status === "loading" ? "ładowanie" : ""}
        {status === "success" ? (
          <>
            {data.map((element) => {
              return(
                <div key={nanoid()}>{element.name.official}</div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
