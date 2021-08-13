import React from 'react';
import Calculator from './Calculator';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { content: 'AC', className: 'btn' },
        { content: '+/-', className: 'btn' },
        { content: '%', className: 'btn' },
        { content: '÷', className: 'btn btn-orange' },
        { content: '7', className: 'btn' },
        { content: '8', className: 'btn' },
        { content: '9', className: 'btn' },
        { content: 'X', className: 'btn btn-orange' },
        { content: '4', className: 'btn' },
        { content: '5', className: 'btn' },
        { content: '6', className: 'btn' },
        { content: '-', className: 'btn btn-orange' },
        { content: '1', className: 'btn' },
        { content: '2', className: 'btn' },
        { content: '3', className: 'btn' },
        { content: '+', className: 'btn btn-orange' },
        { content: '0', className: 'btn' },
        { content: '.', className: 'btn' },
        { content: '=', className: 'btn btn-orange' },
      ],
      calc: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { calc } = this.state;
    this.setState({
      calc: calculate(calc, btnName),
    });
  }

  render() {
    const { buttons, calc } = this.state;
    return (
      <Calculator
        buttons={buttons}
        click={this.handleClick}
        display={calc.next || calc.total || '0'}
      />
    );
  }
}
