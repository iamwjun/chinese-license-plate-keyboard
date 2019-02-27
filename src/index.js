import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/LicensePlateKeyboard.css';
import LicensePlateKeyboard from './components/LicensePlateKeyboard';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(<LicensePlateKeyboard />, document.getElementById('root'));
