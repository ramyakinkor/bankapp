
import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Details.component.js';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<Details />, div);
ReactDOM.unmountComponentAtNode(div);
    });
    