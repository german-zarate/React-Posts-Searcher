import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, act} from '@testing-library/react';
import AppSearcher from './AppSearcher';

test('Render AppSearcher Without Crashing', () => {
  let container = document.createElement('div');
  document.body.appendChild(container);
  act(() =>{
    ReactDOM.render(<AppSearcher />, container);
  })
  document.body.removeChild(container);
});

test('AppSearcher Working', () => {
  const username = 'Leanne Graham';

  const {getByTestId} = render(<AppSearcher />);
    const input = getByTestId('search-input');
    const count = getByTestId('count');

    setTimeout(() => {
      expect(count.textContent).toBe('100');
      fireEvent.change(input, {target: {value: username}});
      expect(count.textContent).toBe('10');
    }, 1000);
});