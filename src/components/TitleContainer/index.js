import React from "react";
import { StyledTitleContainer } from "./TitleContainer.style";

const TitleContainer = ({ ...props }) => {
  return <StyledTitleContainer>{props.children}</StyledTitleContainer>;
};

export default TitleContainer;
