import styled, { css } from "styled-components";

export const StyledTextLine = styled.div(
  ({ mode, theme: { color, fonts } }) => css`
    display: flex;
    flex-direction: row;
  `
);
