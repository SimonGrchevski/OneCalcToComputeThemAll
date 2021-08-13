import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import ButtonList from './ButtonList';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttons, display, click } = this.props;

    return (
      <div className="calc-div">
        <Input display={display} />
        <ButtonList buttons={buttons} handleClick={click} />
      </div>
    );
  }
}

Calculator.propTypes = {
  buttons: PropTypes.instanceOf(Array).isRequired,
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
