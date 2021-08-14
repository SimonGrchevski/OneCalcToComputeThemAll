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
    const { display, click } = this.props;

    return (
      <div className="calc-div">
        <Input display={display} />
        <ButtonList handleClick={click} />
      </div>
    );
  }
}

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
