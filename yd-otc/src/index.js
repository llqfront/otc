import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
