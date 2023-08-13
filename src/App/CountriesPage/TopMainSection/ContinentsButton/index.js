import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../App";
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

  const switchListState = () => {
    setIsListVisible((prevState) => !prevState);
  };

  const { selectedContinent, setSelectedContinent } = useContext(DataContext);

  const isSelected = (continentName) => {
    return continentName === selectedContinent;
  };

  useEffect(() => {
    setIsListVisible(false);
  }, [selectedContinent]);

  const continentButtonHandler = (continentName) => {
    isSelected(continentName)
      ? setSelectedContinent(null)
      : setSelectedContinent(continentName);
  };

  return (
    <>
      <ContinentSelectButton onClick={switchListState}>
        <Text>
          {selectedContinent ? selectedContinent : "Filter by Region"}
        </Text>
        <StyledSelectIcon />
      </ContinentSelectButton>
      {isListVisible && (
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
      )}
    </>
  );
};

export default ContinentsButton;
