import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledCard = styled.div(
  ({ theme: { color, fonts } }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 1rem;
    img {
      height: 100%;
    }
    h3 {
      font-family: ${fonts.cardHeaderFont};
      height: 27px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.01em;
      color: ${color.textCardHeader};
      margin: 0;
    }

    @media ${breakpoints.M} {
      flex-direction: column;
      img {
        margin: 0;
      }
    }

    @media ${breakpoints.S} {
      width: 100%;
    }
  `
);
