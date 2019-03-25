import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

export default class PMButton extends Component {
  render() {
  	const { color, message, customStyle } = this.props;
    return (
      <div>
        <Fab color={color} aria-label={message} className={customStyle}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

PMButton.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string,
  customStyle: PropTypes.string,
};

PMButton.defaultProps = {
  color: "secondary",
  message: "",
  customStyle: "",
};
