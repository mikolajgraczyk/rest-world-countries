import { useState } from "react";
import {
  ContinentSelectButton,
  Text,
  StyledSelectIcon,
  ContinentsList,
  ListElement,
  ListElementButton,
} from "./styled";

const ContinentsButton = ({selectedContinent, setSelectedContinent}) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const expandList = () => {
    setIsListVisible((prevState) => !prevState);
  };

  return (
    <>
      <ContinentSelectButton onClick={expandList}>
        <Text>Filter by Region</Text>
        <StyledSelectIcon />
      </ContinentSelectButton>
      {isListVisible ? (
        <ContinentsList>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "africa"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("africa")
              }
            >
              Africa
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "america"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("america")
              }
            >
              America
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "asia"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("asia")
              }
            >
              Asia
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "europe"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("europe")
              }
            >
              Europe
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "oceania"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("oceania")
              }
            >
              Oceania
            </ListElementButton>
          </ListElement>
        </ContinentsList>
      ) : (
        ""
      )}
    </>
  );
};

export default ContinentsButton;
