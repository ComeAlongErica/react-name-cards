import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; // imports our component
import * as serviceWorker from './serviceWorker';

// first param renders the element in app.js
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
