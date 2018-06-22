import React, { Component } from 'react';
import LicensePlateKeyboard from '../components/LicensePlateKeyboard';
import '../assets/css/LicensePlateKeyboard.css';

export default class AddLicense extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LicensePlateKeyboard />
        );
    }
}