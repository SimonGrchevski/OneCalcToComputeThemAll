import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleClick, value } = this.props;
    handleClick(value);
  }

  render() {
    const { value, className } = this.props;

    return (
      <input
        type="button"
        value={value}
        className={className}
        onClick={this.handleClick}
      />

    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
