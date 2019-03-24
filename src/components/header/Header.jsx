import React, { Component } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" className="header__wrapper">
          <Toolbar>
            <IconButton className="icon-button" color="secondary">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
