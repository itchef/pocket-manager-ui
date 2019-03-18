import { Component } from "react";
import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

export class Header extends Component {
	render() {
		return (
			<div className="header__wrapper">
				<AppBar position="fixed">
					<Toolbar>
						<IconButton className="icon-button" color="secondary">
							<MenuIcon/>
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}