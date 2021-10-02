import React from 'react';
import ReactDom from 'react-dom';
import {Hello} from './hello/hello';
import './css/style.css';




document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <>
            <Hello/>
        </>
    ,document.querySelector('.app'))
})
