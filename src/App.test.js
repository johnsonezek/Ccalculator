import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Calculator App', () => {
  test('renders calculator display and buttons', () => {
    render(<App />);
    
    // Check if the display is rendered and initially empty
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('');
    
    // Check if number buttons are rendered
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  test('handles division by zero', () => {
    render(<App />);
    
    // Simulate button clicks: 5 / 0 =
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    
    // Check if an error message is displayed
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('Error');
  });

  test('clears input when "Clear" is clicked', () => {
    render(<App />);
    
    // Simulate button clicks: 5 + 3 =
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    
    // Clear the input
    fireEvent.click(screen.getByText('Clear'));
    
    // Check if the input is cleared
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('');
  });
});
