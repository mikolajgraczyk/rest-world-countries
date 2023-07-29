import { useState, useContext } from "react";
import { MainContext } from "../..";
import {
  ContinentSelectButton,
  Text,
  StyledSelectIcon,
  ContinentsList,
  ListElement,
  ListElementButton,
} from "./styled";

const ContinentsButton = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const { selectedContinent, setSelectedContinent } = useContext(MainContext);

  const expandList = () => {
    setIsListVisible((prevState) => !prevState);
  };

  return (
    <>
      <ContinentSelectButton onClick={expandList}>
        <Text>
          {selectedContinent ? selectedContinent : "Filter by Region"}
        </Text>
        <StyledSelectIcon />
      </ContinentSelectButton>
      {isListVisible ? (
        <ContinentsList>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "Africa"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("Africa")
              }
            >
              Africa
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "America"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("America")
              }
            >
              America
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "Asia"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("Asia")
              }
            >
              Asia
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "Europe"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("Europe")
              }
            >
              Europe
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() =>
                selectedContinent === "Oceania"
                  ? setSelectedContinent(null)
                  : setSelectedContinent("Oceania")
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
