import Header from "./Header";
import Main from "./Main";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const switchTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <>
        <Header switchTheme={switchTheme} />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
