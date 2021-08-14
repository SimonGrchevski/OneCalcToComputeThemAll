import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const { display } = this.props;
    e.target.value = display;
  }

  render() {
    const { display } = this.props;
    return (
      <input type="text" className="calc-inp" value={display} onChange={this.handleChange} />
    );
  }
}

Input.propTypes = {
  display: PropTypes.string.isRequired,
};

Input.defaultProp = {
  value: '0',
};
