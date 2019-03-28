import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

export default class PMButton extends Component {
  render() {
  	const {
      color, message, customStyle, click,
    } = this.props;
    return (
      <div>
        <Fab
          type="button"
          color={color}
          aria-label={message}
          className={customStyle}
          onClick={() => click()}
        >
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
  click: PropTypes.func,
};

PMButton.defaultProps = {
  color: "secondary",
  message: "",
  customStyle: "",
  click: () => null,
};
