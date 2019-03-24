import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import "./HeaderTab.scss";

export default class HeaderTab extends Component {
  render() {
	  const { value, onTapTab } = this.props;
    return (
      <div className="tab__wrapper">
        <AppBar position="fixed" className="tab__container">
          <Tabs value={value} onChange={onTapTab} centered>
            <Tab label="Expenses" />
            <Tab label="Income" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

HeaderTab.propTypes = {
  value: PropTypes.number,
  onTapTab: PropTypes.func,
};

HeaderTab.defaultProps = {
  value: 0,
  onTapTab: () => {},
};
