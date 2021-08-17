import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import ButtonList from './ButtonList';
import Header from './Header';

const Calculator = (props) => {
  const { display, click } = props;

  return (
    <div className="calc-div">
      <Header />
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
