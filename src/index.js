import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import PocketManager from './components/pocket-manager/PocketManager';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<PocketManager />
	</Provider>,
	document.getElementById('root'));
