import React from 'react';
import Input from './input';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input />
        <Button value="Button" className="btn" />
      </div>
    );
  }
}
