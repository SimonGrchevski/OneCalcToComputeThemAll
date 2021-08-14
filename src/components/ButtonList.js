import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default function ButtonList(props) {
  const buttons = [
    { content: 'AC', className: 'btn' },
    { content: '+/-', className: 'btn' },
    { content: '%', className: 'btn' },
    { content: '÷', className: 'btn btn-orange' },
    { content: '7', className: 'btn' },
    { content: '8', className: 'btn' },
    { content: '9', className: 'btn' },
    { content: 'x', className: 'btn btn-orange' },
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
  ];

  const createButtons = React.useMemo(() => {
    const { handleClick } = props;
    const btns = buttons.map((btn) => (
      <li key={btn.content}>
        <Button
          value={btn.content}
          className={btn.className}
          handleClick={handleClick}
        />
      </li>
    ));
    return btns;
  });

  return (
    <ul className="btn-list flex">
      {createButtons}
    </ul>
  );
}

ButtonList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
