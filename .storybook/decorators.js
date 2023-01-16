import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/Global.style";
import { lightTheme, darkTheme } from "../src/styles/utils/theme";

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
