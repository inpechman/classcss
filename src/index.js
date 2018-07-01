import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ChessBoard from './Chess.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChessBoard />, document.getElementById('root'));
registerServiceWorker();
