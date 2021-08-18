import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import ButtonList from './ButtonList';
import './Calculator.css';

const Calculator = (props) => {
  const { display, click } = props;

  return (
    <div className="calcWrap flex">
      <div>
        <h1 className="calcHeader">
          Lets do Some Math:
        </h1>

      </div>

      <div className="calc-div">
        <Input display={display} />
        <ButtonList handleClick={click} />
      </div>
    </div>
  );
};

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Calculator;
