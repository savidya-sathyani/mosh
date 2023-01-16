import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../styles/Global.style";
import { lightTheme, darkTheme } from "../../styles/utils/theme";

/**
 * Load the component with the theme styles
 * @param {string} theme - Theme
 * @param {object} props - Props
 * @param {React.Component} Component - Component
 * @returns {React.Component} - Component with theme
 */
export const WithTheme = ({ theme, ...props }) => {
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle theme={selectedTheme} />
      {props.children}
    </ThemeProvider>
  );
};
