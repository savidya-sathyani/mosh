const globalStyles = {
  fonts: {
    buttonFont: "'Maison Neue', sans-serif",
  },
};

const baseColors = {
  white: {
    base: "#FFFFFF",
    light1: "#F9F9F2",
  },
  orange: {
    base: "#FF6340",
  },
  gray: "#6c757d",
};

export const lightTheme = {
  ...globalStyles,
  name: "light",
  color: {
    background: "white",
    buttonBackgroundPrimary: baseColors.orange.base,
    buttonTextPrimary: baseColors.white.light1,
    buttonBackgroundSecondary: baseColors.gray,
    buttonTextSecondary: baseColors.white.base,
  },
};

export const darkTheme = {
  ...globalStyles,
  name: "dark",
  color: {
    background: baseColors.white,
    buttonBackgroundPrimary: baseColors.orange.base,
    buttonTextPrimary: baseColors.white.light1,
    buttonBackgroundSecondary: baseColors.gray,
    buttonTextSecondary: baseColors.white.base,
  },
};
