import React from 'react';
import PropTypes from 'prop-types';

import { buttonModes } from '../../constants/buttonConstants';
import getObjectValuesAsArray from '../../utils/getObjectValuesAsArray';

import { StyledButton } from './LinkButton.style';

const LinkButton = ({ label, mode, link, onClick, ...props }) => {
  return (
    <StyledButton
      mode={mode}
      link={link}
      onClick={onClick}
      {...props}>
      <a href={link}>{label}</a>
    </StyledButton>
  );
};

LinkButton.propTypes = {
  /**
   * Text rendering inside button. 
   * Required
   */
  label: PropTypes.string.isRequired,
  /**
   * Link to be used for the button
   * Required
   */
  link: PropTypes.string.isRequired,
  /**
   * Mode of the button. Can be either 'Primary' or 'Secondary'
   * Optional and when not provided, defaults to 'Primary'
   */
  mode: PropTypes.oneOf(getObjectValuesAsArray(buttonModes)),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LinkButton.defaultProps = {
  mode: 'Primary',
  onClick: undefined,
};

export default LinkButton;