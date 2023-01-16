import styled, { css } from "styled-components";
import { breakpoints } from "./utils/breakpoints";

export const StyledButton = styled.button(
  ({ mode, theme: { color, fonts } }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: "220px";
    height: 53px;
    background: ${color[`buttonBackground${mode}`]} !important;
    border: none;
    border-radius: 8px;
    a {
      font-family: ${fonts.buttonFont};
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      height: 21px;
      max-height: 21px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      color: ${color[`buttonText${mode}`]} !important;
    }
    @media ${breakpoints.M} {
      width: 100%;
    }
  `
);
