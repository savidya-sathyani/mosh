import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledTitleContainer = styled.div(
  ({ theme: { color, fonts } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
      margin: 0;
      padding: 0;
      font-family: ${fonts.textLineFont};
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.01em;
      color: #003d3b;
      opacity: 0.75;
    }
    p#heading {
      font-family: ${fonts.titleFont};
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      letter-spacing: -0.02em;
      padding-bottom: 1rem;
    }
    @media ${breakpoints.M} {
      width: 100%;
      align-items: center;
    }
    @media ${breakpoints.S} {
      text-align: center;
    }
  `
);
