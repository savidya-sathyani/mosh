import { ThemeProvider } from "styled-components";

import Button from "./components/LinkButton/LinkButton";

import { lightTheme, darkTheme } from "./styled-components/utils/theme";
import GlobalStyle from "./styled-components/Global.style";

function App() {
  const theme = 'light';
  const appTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle theme={appTheme} />
    </ThemeProvider>
  );
}

export default App;
