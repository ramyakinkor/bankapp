
import React from 'react';
import ReactDOM from 'react-dom';
import Bankdetails from './Bankdetails.page.js';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<Bankdetails />, div);
ReactDOM.unmountComponentAtNode(div);
    });
    