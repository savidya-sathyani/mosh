import React from 'react';
import tick from '../../assets/icons/tick.svg';

import PropTypes from 'prop-types';

import { StyledTextLine } from './TextLine.style';

const TextLine = ({ label }) => {
  return (
    <StyledTextLine label={label}>
      <img src={tick} alt={label} />
      <p>{label}</p>
    </StyledTextLine>
  );
};

TextLine.propTypes = {
  /**
   * Label for the text line
   */
  label: PropTypes.string.isRequired,
};

export default TextLine;