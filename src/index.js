import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'tachyons';
import App from './containers/App'

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();