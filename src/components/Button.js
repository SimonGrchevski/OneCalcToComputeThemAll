import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, className, handleClick } = props;

  function clickHandler() {
    handleClick(value);
  }

  return (
    <input
      type="button"
      value={value}
      className={className}
      onClick={clickHandler}
    />
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
