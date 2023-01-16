import { ThemeProvider } from "styled-components";

import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";

import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

import { lightTheme, darkTheme } from "./styles/utils/theme";
import { StyledAppRaw } from "./styles/AppRaw.style";
import GlobalStyle from "./styles/Global.style";
import TitleContainer from "./components/TitleContainer";


function App() {
  const theme = 'light';
  const appTheme = theme === 'dark' ? darkTheme : lightTheme;
  const data = [
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur",
  ]
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle theme={appTheme} />
      <StyledAppRaw>
        <TitleContainer>
          <p id="heading">Get back on track</p>
          <p>Treatment plans in 24 hours.</p>
          <p>Treat anxiety, depression and more.</p>
        </TitleContainer>
        <CardContainer>
          <Card
            image={{ src: image1, alt: "Online Consultation" }}
            header="Free Online Doctor Consultation"
            button={{ label: "Get Started", link: "https://www.getmosh.com.au/quizzes/mental_health_quiz" }}
            data={data}
          />
          <Card
            image={{ src: image2, alt: "Online Consultation" }}
            header="One-on-one Therapy Sessions"
            button={{ label: "Book Therapist", link: "https://www.getmosh.com.au/booking/mental_health" }}
            data={data}
          />
        </CardContainer>
      </StyledAppRaw>
    </ThemeProvider >
  );
}

export default App;
