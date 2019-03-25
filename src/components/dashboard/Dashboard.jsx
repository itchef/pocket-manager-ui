import React, { Component } from "react";
import "./Dashboard.scss";
import PropTypes from "prop-types";
import TableContainer from "../table-container/TableContainer";
import PMButton from "../pm-button/PMButton";

export default class Dashboard extends Component {
  componentDidMount() {
	  const { fetchReports, tabName } = this.props;
	  fetchReports(tabName);
  }

  render() {
  	const { reports } = this.props;
    return (
      <div className="dashboard-wrapper">
        <TableContainer reports={reports} />
        <PMButton color="secondary" message="Add expenses" customStyle="add-new-button" />
      </div>
    );
  }
}

Dashboard.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })),
  tabName: PropTypes.string,
  fetchReports: PropTypes.func,
};

Dashboard.defaultProps = {
  reports: [],
  tabName: "",
  fetchReports: () => null,
};
