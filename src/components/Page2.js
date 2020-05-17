import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) => (
    <div className="App">
        <header>
            <img src={logo} className="App-log" alt="logo" />
            <h1 className="App-title">Welcome</h1>
        </header>
        <button onClick={() => onRouteChange('page1')}>Page1</button>
        <button disabled>Page3</button>
        <button onClick={() => onRouteChange('page3')}>Page3</button>
    </div>
);

export default Page2;
