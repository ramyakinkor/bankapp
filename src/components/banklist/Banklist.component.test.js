
import React from 'react';
import ReactDOM from 'react-dom';
import Banklist from './Banklist.component.js';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<Banklist />, div);
ReactDOM.unmountComponentAtNode(div);
    });
    