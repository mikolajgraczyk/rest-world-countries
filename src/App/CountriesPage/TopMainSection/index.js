import { useContext } from "react";
import { DataContext } from "../../App";
import ContinentsButton from "./ContinentsButton";
import {
  StyledTopMainSection,
  InputBar,
  StyledInputIcon,
  Input,
} from "./styled";

const TopMainSection = () => {
  const { searchParams, setSearchParams, query } = useContext(DataContext);

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);

      return;
    }

    setSearchParams({ search: target.value });
  };

  return (
    <StyledTopMainSection>
      <InputBar>
        <StyledInputIcon />
        <Input
          placeholder={"Search for a country…"}
          value={query || ""}
          onChange={onInputChange}
        />
      </InputBar>
      <ContinentsButton />
    </StyledTopMainSection>
  );
};

export default TopMainSection;
