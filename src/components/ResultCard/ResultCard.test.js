import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import ResultCard from './ResultCard';

test('Render ResultCard Without Crashing', () => {
    let container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<ResultCard />, container);
    document.body.removeChild(container);
});

test('Render ResultCard\'s Params', () => {
    const title = 'Simple title';
    const body = 'Quick body';
    const username = 'Tom Smith';

    const {getByTestId} = render(<ResultCard title={title} body={body} username={username} />);
    const card = getByTestId('result-card');
    expect(card).toHaveTextContent(title);
    expect(card).toHaveTextContent(body);
    expect(card).toHaveTextContent(username);
});
