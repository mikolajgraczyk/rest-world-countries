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

  const isSelected = (continentName) => {
    return continentName === selectedContinent;
  };

  const continentButtonHandler = (continentName) => {
    isSelected(continentName)
      ? setSelectedContinent(null)
      : setSelectedContinent(continentName);
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
              onClick={() => continentButtonHandler("Africa")}
              isselected={isSelected("Africa") ? "true" : "false"}
            >
              Africa
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() => continentButtonHandler("America")}
              isselected={isSelected("America") ? "true" : "false"}
            >
              America
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() => continentButtonHandler("Asia")}
              isselected={isSelected("Asia") ? "true" : "false"}
            >
              Asia
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() => continentButtonHandler("Europe")}
              isselected={isSelected("Europe") ? "true" : "false"}
            >
              Europe
            </ListElementButton>
          </ListElement>
          <ListElement>
            <ListElementButton
              onClick={() => continentButtonHandler("Oceania")}
              isselected={isSelected("Oceania") ? "true" : "false"}
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
