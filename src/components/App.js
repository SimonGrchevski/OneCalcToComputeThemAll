import React, { useState } from 'react';
import Calculator from './Calculator';
import calculate from '../logic/calculate';
import MainContent from './MainContent';
import Header from './Header';
import Quote from './Quote';

const App = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );
  const handleClick = (btnName) => {
    const newState = calculate(state, btnName);
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <div>
      <Header />
      <MainContent />
      <Calculator
        click={handleClick}
        display={state.next || state.total || '0'}
      />
      <Quote />
    </div>
  );
};

export default App;
