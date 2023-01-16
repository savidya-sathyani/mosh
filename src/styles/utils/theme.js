const baseColors = {
  white: {
    base: "#FFFFFF",
    light1: "#F9F9F2",
  },
  orange: {
    base: "#FF6340",
  },
  gray: "#6c757d",
  green: "#003D3B",
};

const typography = {
  base: "'Maison Neue', sans-serif",
};

const globalStyles = {
  fonts: {
    buttonFont: typography.base,
    textLineFont: typography.base,
    cardHeaderFont: typography.base,
  },
};

export const lightTheme = {
  ...globalStyles,
  name: "light",
  color: {
    background: baseColors.white.base,
    buttonBackgroundPrimary: baseColors.orange.base,
    buttonTextPrimary: baseColors.white.light1,
    buttonBackgroundSecondary: baseColors.gray,
    buttonTextSecondary: baseColors.white.base,
    textLine: baseColors.green,
    textCardHeader: baseColors.green,
  },
};

export const darkTheme = {
  ...globalStyles,
  name: "dark",
  color: {
    background: baseColors.white.light1,
    buttonBackgroundPrimary: baseColors.orange.base,
    buttonTextPrimary: baseColors.white.light1,
    buttonBackgroundSecondary: baseColors.gray,
    buttonTextSecondary: baseColors.white.base,
    textLine: baseColors.green,
    textCardHeader: baseColors.green,
  },
};
