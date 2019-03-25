import React, { Component } from "react";
import Header from "../header/Header";
import HeaderTab from "../../containers/HeaderTab.container";
import Dashboard from "../dashboard/Dashboard";
import "./PocketManager.scss";

class PocketManager extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content-wrapper">
          <HeaderTab />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default PocketManager;
