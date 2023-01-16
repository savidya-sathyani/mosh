import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledTextLine = styled.div(
  ({ theme: { color, fonts } }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 24px;
    width: 100%;
    margin: 1rem;
    img {
      width: 1rem;
      height: 1rem;
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
    }

    @media ${breakpoints.S} {
      height: 21px;
    }
  `
);
