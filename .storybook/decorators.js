import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styled-components/Global.style";
import { lightTheme, darkTheme } from "../src/styled-components/theme";

const withTheme = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle theme={storyTheme} />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
