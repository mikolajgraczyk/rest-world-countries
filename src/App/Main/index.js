import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import axios from "axios";
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

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get("https://restcountries.com/v3.1/all")
          .then((response) => resolve(response.data))
          .catch((error) => reject(new Error(error)));
      }, 1000);
    });
  };

  const { status, data } = useQuery(["countries"], fetchData);

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
              return <div key={nanoid()}>{element.name.official}</div>;
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
