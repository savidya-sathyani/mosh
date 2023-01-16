import styled from "styled-components";
import { breakpoints } from "../../styles/utils/breakpoints";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.M} {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }
  @media ${breakpoints.S} {
    flex-direction: column;
  }
`;
