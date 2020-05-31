import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react';
import SearchForm from './SearchForm';

test('Render SearchForm Without Crashing', () => {
    let container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SearchForm />, container);
    document.body.removeChild(container);
});

test('SearchForm Working', () => {
    const value = 'TEST';
    const mockFn = jest.fn();
    const {getByTestId} = render(<SearchForm onSearch={mockFn} />);
    const input = getByTestId('search-input');

    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: value}});
    expect(input.value).toBe(value);
});