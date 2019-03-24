import React, { Component } from "react";
import Header from "../header/Header";
import HeaderTab from "../../containers/tab/HeaderTab.container";

class PocketManager extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderTab />
      </div>
    );
  }
}

export default PocketManager;
