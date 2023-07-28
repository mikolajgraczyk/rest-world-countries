import { useState } from "react";
import ContinentsButton from "./ContinentsButton";
import {
  StyledTopMainSection,
  InputBar,
  StyledInputIcon,
  Input,
} from "./styled";

const TopMainSection = ({
  selectedContinent,
  setSelectedContinent,
  searchParams,
  setSearchParams,
}) => {
  const [inputValue, setInputValue] = useState("");

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
      <ContinentsButton
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />
    </StyledTopMainSection>
  );
};

export default TopMainSection;
