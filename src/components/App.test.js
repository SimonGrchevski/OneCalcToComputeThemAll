import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Quote from './Quote';
import Input from './input';
import Button from './Button';
import MainContent from './MainContent';
import Calculator from './Calculator';
import Header from './Header';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Quote component', () => {
  test('Quote component renders', () => {
    render(<Quote />);
    expect( screen.getByText(/There/)).toBeInTheDocument;
  });
});


describe('Input Component', () => {
  test('Input component renders', () => {
    render(<Input display=''/>);
    expect(screen.getByRole('textbox'));
  });
});


describe('Button component', () => {
  test('Button component renders', () => {
    render(<Button value='null' className='' handleClick={()=>{}}/>);
    expect(screen.getByRole('button')).toBeInTheDocument;
  });
});

describe('Main component', () => {
  test('Main component renders', () => {
    render(<MainContent />)
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

describe('Calculator component', () => {
  test('Calculator component renders', () => {
    render(<Calculator display='' click={() =>{}}/>)
    expect(screen.getByText('Lets do Some Math:')).toBeInTheDocument;
  });
});

describe('Header component', () => {
  test('Header component renders', () => {
    render(<Router><Header /></Router>);
    expect(screen.getByRole('banner')).toBeInTheDocument;
  });
});


describe('Click events', () => {
  test('Quote click event', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText(/There/)).toBeNull();
    userEvent.click(screen.getByText('Quote'));
    expect(screen.getByText(/There/)).toBeInTheDocument;
  });

  test('Calculator click event', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText('Lets do Some Math:')).toBeNull();
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Lets do Some Math:')).toBeInTheDocument;
  });

  test('Main click event', () => {
    render(<Router><App /></Router>);
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.queryByText('Welcome to my calculator')).toBeNull();
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Welcome to my calculator')).toBeInTheDocument;
  });
  
});