import React, { Component } from "react";
import "./Dashboard.scss";
import PropTypes from "prop-types";
import TableContainer from "../table-container/TableContainer";
import PMButton from "../pm-button/PMButton";
import { ADD_TRANSACTION_MODAL } from "../../constants/modal";
import TransactionForm from "../../containers/TransactionForm.container";

export default class Dashboard extends Component {
  componentDidMount() {
	  const { fetchReports, tabName } = this.props;
	  fetchReports(tabName);
  }

  newClickHandler = () => {
    const { openNewTransactionModel } = this.props;
    openNewTransactionModel(ADD_TRANSACTION_MODAL);
  };

  render() {
  	const { reports } = this.props;
    return (
      <div className="dashboard-wrapper">
        <TableContainer reports={reports} />
        <TransactionForm />
        <PMButton color="secondary" message="Add expenses" customStyle="add-new-button" click={this.newClickHandler} />
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
  openNewTransactionModel: PropTypes.func,
};

Dashboard.defaultProps = {
  reports: [],
  tabName: "",
  fetchReports: () => null,
  openNewTransactionModel: () => null,
};
