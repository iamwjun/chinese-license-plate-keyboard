import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/LicensePlateKeyboard.css';
import LicensePlateKeyboard from './components/LicensePlateKeyboard';

var root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }
// [5, 6].map(n => console.log(n));

const element = <h1>Hello, world</h1>;
ReactDOM.render(<LicensePlateKeyboard />, document.getElementById('root'));