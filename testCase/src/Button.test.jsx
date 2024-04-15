import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button'; // Importing the Button component to be tested
import { add, fetchData } from './Utils.jsx'; // Importing utility functions for testing
import fetchMock from 'jest-fetch-mock'; // Importing fetch mocking library

// Configure jest-fetch-mock
fetchMock.enableMocks(); // Enabling mocking of fetch requests

// Component Testing
describe('Component Testing', () => {
  test('Button onClick event', () => {
    // Mock function to be passed as onClick prop
    const handleClick = jest.fn();
    
    // Rendering the Button component with mock onClick handler
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    const button = getByText('Click Me'); // Finding the button element by its text content
    
    // Simulating a click event on the button
    fireEvent.click(button);
    
    // Asserting that the handleClick function has been called exactly once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// Function Testing
describe('Function Testing', () => {
  // Testing the add function
  test('add function adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3); // Asserting that 1 + 2 equals 3
  });

  // Testing the fetchData function
  test('fetchData function fetches data from API', async () => {
    // Mocking the fetch request and providing a mock response
    fetchMock.mockResponseOnce(JSON.stringify({ data: 'example' }));

    // Calling the fetchData function, which should make a fetch request
    const data = await fetchData();

    // Asserting that the returned data matches the expected response
    expect(data).toEqual({ data: 'example' });
  });
});

// Integration Testing (Placeholder)
describe('Integration Testing', () => {
  // Integration test here if provided details about parent component interaction
});
