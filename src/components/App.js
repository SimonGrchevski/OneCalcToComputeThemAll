import React from 'react';
import Calculator from './Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { content: 'AC', className: 'btn' },
        { content: '+/-', className: 'btn' },
        { content: '%', className: 'btn' },
        { content: '/', className: 'btn btn-orange' },
        { content: '7', className: 'btn' },
        { content: '8', className: 'btn' },
        { content: '9', className: 'btn' },
        { content: 'X', className: 'btn btn-orange' },
        { content: '4', className: 'btn ' },
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
    };
  }

  render() {
    const { buttons } = this.state;
    return (
      <Calculator buttons={buttons} />
    );
  }
}
