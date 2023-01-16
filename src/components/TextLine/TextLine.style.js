import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledTextLine = styled.div(
  ({ theme: { color, fonts } }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0.5rem 0;
    img {
      width: 1rem;
      height: 1rem !important;
      margin-right: 1rem;
    }
    p {
      font-family: ${fonts.textLineFont};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.01em;
      color: ${color.textLine};
      width: 100%;
      margin: 0 0.5rem;
    }

    @media ${breakpoints.M} {
      height: 100%;
      min-height: 21px;
      margin: 0;
    }
  `
);
