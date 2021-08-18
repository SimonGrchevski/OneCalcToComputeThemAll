import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route path="/Calculator">
          <Calculator
            click={handleClick}
            display={state.next || state.total || '0'}
          />
        </Route>
        <Route>
          <Quote path="/Quote" />
        </Route>
      </Switch>

    </div>
  );
};

export default App;
