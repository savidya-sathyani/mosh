import { ThemeProvider } from "styled-components";

import LinkButton from "./components/LinkButton/LinkButton";

import { lightTheme, darkTheme } from "./styles/utils/theme";
import GlobalStyle from "./styles/Global.style";
import TextLine from "./components/TextLine/TextLine";

function App() {
  const theme = 'light';
  const appTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle theme={appTheme} />
      <div className="App" style={{ width: '500px', backgroundColor: '#F9F9F2' }}>
        <LinkButton label='Get Started' link={'https://www.getmosh.com.au/quizzes/mental_health_quiz'} />
        <TextLine label='Long test that needs to be rendered as a sentence.' />
        <TextLine label='Long test that needs to be rendered as a sentence.' />
      </div>
    </ThemeProvider>
  );
}

export default App;
