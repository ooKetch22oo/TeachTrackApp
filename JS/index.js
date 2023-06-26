// Write an index file.
//The file that registers and renders your app component.
// This is the file that will be run by the browser.
// It should import the App component from App.js and render it to the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
