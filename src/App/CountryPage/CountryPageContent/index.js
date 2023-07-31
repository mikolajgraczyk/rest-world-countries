import { StyledCountryPageContent, FlagSection, FlagImage } from "./styled";

const CountryPageContent = ({ selectedCountryData }) => {
    console.log(selectedCountryData);

    return(
        <StyledCountryPageContent>
            <FlagSection>
                <FlagImage src={selectedCountryData[0].flags.svg} alt=""/>
            </FlagSection>
        </StyledCountryPageContent>
    );
};

export default CountryPageContent;