import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import { Provider } from "react-redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import reducers from "./reducers";
import defaultTheme from "./theme/Default.theme";
import PocketManager from './components/pocket-manager/PocketManager';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={defaultTheme}>
			<PocketManager />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'));
