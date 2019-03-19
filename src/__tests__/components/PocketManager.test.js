import React from "react";
import ReactDOM from "react-dom";
import PocketManager from "../../components/pocket-manager/PocketManager";

describe("PocketManager", () => {
  it("should render PocketManager App", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PocketManager />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
