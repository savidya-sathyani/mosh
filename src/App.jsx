import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";

import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

import { lightTheme, darkTheme } from "./styles/utils/theme";
import { StyledAppRaw } from "./styles/AppRaw.style";
import GlobalStyle from "./styles/Global.style";
import TitleContainer from "./components/TitleContainer";
import { get } from "./api/invoke";

// const mockData = {
//   consultation: [
//     "Personalized treatment options",
//     "Video consults and easy check-ins",
//     "Medication, prescribed and delivered",
//   ],
//   therapy: [
//     "Match with registered therapists",
//     "Video sessions and easy check-ins",
//     "Confidential online therapy sessions",
//   ]
// }

function App() {
  const theme = 'light';
  const appTheme = theme === 'dark' ? darkTheme : lightTheme;
  const [consultationData, setConsultationData] = useState([]);
  const [therapyData, setTherapyData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await get({ path: 'https://moshhero.free.beeceptor.com/my/api/options' });
      setConsultationData(res.consultation);
      setTherapyData(res.therapy);
      // setConsultationData(mockData.consultation);
      // setTherapyData(mockData.therapy);
    })();
  }, []);

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
            data={consultationData}
          />
          <Card
            image={{ src: image2, alt: "Online Consultation" }}
            header="One-on-one Therapy Sessions"
            button={{ label: "Book Therapist", link: "https://www.getmosh.com.au/booking/mental_health" }}
            data={therapyData}
          />
        </CardContainer>
      </StyledAppRaw>
    </ThemeProvider >
  );
}

export default App;
