import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import ButtonList from './ButtonList';

const Calculator = (props) => {
  const { display, click } = props;

  return (
    <div className="calc-div">
      <Input display={display} />
      <ButtonList handleClick={click} />
    </div>
  );
};

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Calculator;
