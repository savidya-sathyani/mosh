import { ThemeProvider } from "styled-components";

import Button from "./components/LinkButton/LinkButton";

import { lightTheme, darkTheme } from "./styles/utils/theme";
import GlobalStyle from "./styles/Global.style";

function App() {
  const theme = 'light';
  const appTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle theme={appTheme} />
      <div className="App" style={{ width: '500px', backgroundColor: 'yellow' }}>
        <Button label='Get Started' link={'https://www.getmosh.com.au/quizzes/mental_health_quiz'} />
      </div>
    </ThemeProvider>
  );
}

export default App;
