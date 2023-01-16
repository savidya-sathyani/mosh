import styled from "styled-components";
import { breakpoints } from "./utils/breakpoints";

export const StyledAppRaw = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: #f5f5f5;

  @media ${breakpoints.M} {
    flex-direction: column;
    padding: 1rem;
  }
`;
