import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();