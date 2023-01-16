import styled from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";
// import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  img {
    width: 12px;
    height: 7px !important;
  }
  button {
    border: none;
    background: transparent;
  }
  @media ${breakpoints.M} {
    width: fit-content;
    padding-bottom: 1rem;
  }
`;
