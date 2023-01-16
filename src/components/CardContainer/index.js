import React from "react";
import { StyledCardContainer } from "./CardContainer.style";

const CardContainer = ({ ...props }) => {
  return <StyledCardContainer>{props.children}</StyledCardContainer>;
};

export default CardContainer;
