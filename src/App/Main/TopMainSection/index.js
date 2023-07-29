import { useState, useContext } from "react";
import { MainContext } from "..";
import ContinentsButton from "./ContinentsButton";
import {
  StyledTopMainSection,
  InputBar,
  StyledInputIcon,
  Input,
} from "./styled";

const TopMainSection = () => {
  const [inputValue, setInputValue] = useState("");

  const { searchParams, setSearchParams, query } = useContext(MainContext); 

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
      setInputValue(target.value);

      return;
    }

    setInputValue(target.value);
    setSearchParams({ search: target.value.trim() });
  };

  return (
    <StyledTopMainSection>
      <InputBar>
        <StyledInputIcon />
        <Input
          placeholder={"Search for a country…"}
          value={inputValue}
          onChange={onInputChange}
        />
      </InputBar>
      <ContinentsButton/>
    </StyledTopMainSection>
  );
};

export default TopMainSection;
