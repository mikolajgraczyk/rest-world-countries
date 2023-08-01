import { addComasToNumber } from "../../addComasToNumber";
import CountryDetail from "./CountryDetail";
import BorderCountries from "./BorderCountries";
import {
  CountryName,
  FlagImage,
  FlagSection,
  InfoSection,
  StyledCountryPageContent,
  CountryDetails,
} from "./styled";

const CountryPageContent = ({ selectedCountryData }) => {
  console.log(selectedCountryData);

  return (
    <StyledCountryPageContent>
      <FlagSection>
        <FlagImage src={selectedCountryData.flags.svg} alt="" />
      </FlagSection>
      <InfoSection>
        <CountryName>{selectedCountryData.name.common}</CountryName>
        <CountryDetails>
          <div>
            <CountryDetail
              detailName={"Native Name:"}
              detailValue={
                Object.values(selectedCountryData.name.nativeName)[0].common
              }
            />
            <CountryDetail
              detailName={"Population:"}
              detailValue={addComasToNumber(selectedCountryData.population)}
            />
            <CountryDetail
              detailName={"Region:"}
              detailValue={selectedCountryData.region}
            />
            <CountryDetail
              detailName={"SubRegion:"}
              detailValue={selectedCountryData.subregion}
            />
            <CountryDetail
              detailName={"Capital:"}
              detailValue={selectedCountryData.capital}
            />
          </div>
          <div>
            <CountryDetail
              detailName={"Top Level Domain:"}
              detailValue={selectedCountryData.tld}
            />
            <CountryDetail
              detailName={"Currencies:"}
              detailValue={
                Object.values(selectedCountryData.currencies)[0].name
              }
            />
            <CountryDetail
              detailName={"Languages:"}
              detailValue={Object.values(selectedCountryData.languages).join(
                ", "
              )}
            />
          </div>
        </CountryDetails>
        {selectedCountryData.borders ? (
          <BorderCountries countries={selectedCountryData.borders} />
        ) : (
          ""
        )}
      </InfoSection>
    </StyledCountryPageContent>
  );
};

export default CountryPageContent;
