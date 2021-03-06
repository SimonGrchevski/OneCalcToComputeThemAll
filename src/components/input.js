import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { display } = props;

  function handleChange(e) {
    e.target.value = display;
  }

  return (
    <input type="text" className="calc-inp" value={display} onChange={handleChange} />
  );
};

Input.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Input;
