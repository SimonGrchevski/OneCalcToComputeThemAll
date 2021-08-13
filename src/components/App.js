import React from 'react';
import Calculator from './Calculator';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    this.setState(() => calculate({ total, next, operation }, btnName));
  }

  render() {
    const { next, total } = this.state;
    return (
      <Calculator
        click={this.handleClick}
        display={next || total || '0'}
      />
    );
  }
}
