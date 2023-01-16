import styled, { css } from "styled-components";
import { breakpoints } from "./utils/breakpoints";

export const StyledAppRaw = styled.div(
  ({ theme: { color } }) => css`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 7rem;
  background-color: ${color.background};
  @media ${breakpoints.M} {
    flex-direction: column;
    padding: 1rem;
    `
);
