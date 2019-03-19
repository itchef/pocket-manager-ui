import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import defaultTheme from "../theme/Default.theme";
import PocketManager from "../components/pocket-manager/PocketManager";

const store = createStore(reducers);

export const element = (
  <Provider store={store}>
    <MuiThemeProvider theme={defaultTheme}>
      <PocketManager />
    </MuiThemeProvider>
  </Provider>
);

export const container = document.getElementById("root");
