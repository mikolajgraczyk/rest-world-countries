import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetchData";
import TopMainSection from "./TopMainSection";
import BottomMainSection from "./BottomMainSection";
import { useSearchParams } from "react-router-dom";
import { StyledMain, Wrapper } from "./styled";

const Main = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { status, data } = useQuery(
    ["countries", query, selectedContinent],
    () => fetchData(query, selectedContinent)
  );

  const showCountries = () => {
    if (query && selectedContinent) {
      const queryAtContinent = data.filter((element) =>
        element.name.official.toLowerCase().includes(query.toLowerCase())
      );

      return queryAtContinent;
    }

    return data;
  };

  return (
    <StyledMain>
      <Wrapper>
        <TopMainSection
          selectedContinent={selectedContinent}
          setSelectedContinent={setSelectedContinent}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <BottomMainSection status={status} showCountries={showCountries} />
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
