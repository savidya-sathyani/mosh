import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledCardContent = styled.div(
  ({ isShow }) => css`
    display: ${isShow ? "block" : "none"};
    padding-bottom: 0.5rem;

    @media ${breakpoints.M} {
      padding-bottom: 1rem;
    }
  `
);
