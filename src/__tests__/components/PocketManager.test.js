import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import { createShallow } from "@material-ui/core/test-utils";
import PocketManager from "../../components/pocket-manager/PocketManager";
import Header from "../../components/header/Header";

configure({ adapter: new Adapter() });

describe("PocketManager", () => {
  let store;
  let shallow;
  const mockStore = configureStore();

  beforeEach(() => {
    store = mockStore({});
    shallow = createShallow();
  });

  it("should render PocketManager App", () => {
    const div = document.createElement("div");
    const packageManager = shallow(
      <Provider store={store}>
        <PocketManager />
      </Provider>,
      div,
    );
    expect(packageManager.find(Header)).toBeTruthy();
  });
});
