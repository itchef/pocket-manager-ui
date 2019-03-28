import React, {Component} from "react";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import PropTypes from "prop-types";
import "./Dropdown.scss";

export default class Dropdown extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isOpen: false,
		};
	};

	handleClose = () => {
		this.setState({ isOpen: false });
	};

	handleOpen = () => {
		this.setState({ isOpen: true });
	};

	renderMenuItems = items => items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>);

	render() {
    const {
    	name, value, onChange, items, label,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
	      <InputLabel htmlFor={`${name}-open-select`}>{label}</InputLabel>
	      <Select
			      open={isOpen}
			      onClose={this.handleClose}
			      onOpen={this.handleOpen}
			      value={value}
			      onChange={e => onChange(e.target.value)}
			      inputProps={{
			      	name: name,
				      id: `${name}-open-select`,
			      }}
			      className="full-width"
	      >
		      {this.renderMenuItems(items)}
	      </Select>
      </div>
    );
  }
}

Dropdown.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
	items: PropTypes.array,
};

Dropdown.defaultProps = {
	name: "",
	value: "",
	label: "",
	onChange: () => null,
	items: [],
};
