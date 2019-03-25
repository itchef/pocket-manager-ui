import React, { Component } from "react";
import {
  Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";


export default class TableContainer extends Component {
  render() {
  	const { reports } = this.props;
  	const getTableBody = () => reports.map(report => (
	    <TableRow key={report.name}>
        <TableCell component="th" scope="row">{report.name}</TableCell>
        <TableCell align="right">{report.amount}</TableCell>
      </TableRow>
	  ));
  	return (
      <Paper>
	      <Table>
	        <TableHead>
						<TableRow>
						  <TableCell>Type</TableCell>
						  <TableCell>Amount</TableCell>
						</TableRow>
		      </TableHead>
	        <TableBody>{ getTableBody() }</TableBody>
	      </Table>
    </Paper>
	  );
  }
}

TableContainer.propTypes = {
	reports: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		amount: PropTypes.number,
	})),
};

TableContainer.defaultProps = {
	reports: [],
};
