
import React from 'react';
import ReactDOM from 'react-dom';
import Banks from './Banks.page.js';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<Banks />, div);
ReactDOM.unmountComponentAtNode(div);
    });
    