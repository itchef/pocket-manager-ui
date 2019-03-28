import React, {Component} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,} from "@material-ui/core";
import PropTypes from "prop-types";
import Dropdown from "../utils/Dropdown";

export default class TransactionForm extends Component {
	state = {
		amount: 0,
		transactionType: "",
	};

	handleTransactionTypeChange = (value) => {
		this.setState({ transactionType: value });
	};

  render() {
  	const { isActive, onClose } = this.props;
  	const { amount, transactionType } = this.state;
  	const transactionTypes = ["Expense", "Income"];
	  return (
  <div>
      <Dialog open={isActive} onClose={onClose} aria-labelledby="transaction-form-title">
      <DialogTitle id="transaction-form-title">New Transaction</DialogTitle>
      <DialogContent>
        <form noValidate>
          <TextField
            id="transaction-form__amount"
            label="Amount"
            value={amount}
            fullWidth
            onChange={e => this.setState({ amount: e.target.value })}
          />
          <Dropdown
		          value={transactionType}
		          name="new-transaction"
		          label="Type"
		          items={transactionTypes}
		          onChange={this.handleTransactionTypeChange}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  </div>
	  );
  }
}

TransactionForm.propTypes = {
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
};

TransactionForm.defaultProps = {
  isActive: false,
  onClose: () => null,
};
