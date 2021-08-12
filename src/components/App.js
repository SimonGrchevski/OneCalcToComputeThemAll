import React from 'react';
import Calculator from './Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { content: 'AC', className: 'btn w-25' },
        { content: '+/-', className: 'btn w-25' },
        { content: '%', className: 'btn w-25' },
        { content: '/', className: 'btn w-25' },
        { content: '7', className: 'btn w-25' },
        { content: '8', className: 'btn w-25' },
        { content: '9', className: 'btn w-25' },
        { content: 'X', className: 'btn w-25' },
        { content: '4', className: 'btn w-25' },
        { content: '5', className: 'btn w-25' },
        { content: '6', className: 'btn w-25' },
        { content: '-', className: 'btn w-25' },
        { content: '1', className: 'btn w-25' },
        { content: '2', className: 'btn w-25' },
        { content: '3', className: 'btn w-25' },
        { content: '+', className: 'btn w-25' },
        { content: '0', className: 'btn w-50' },
        { content: '.', className: 'btn w-25' },
        { content: '=', className: 'btn w-25' },
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
