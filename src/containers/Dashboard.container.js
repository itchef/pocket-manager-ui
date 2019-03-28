import { connect } from "react-redux";
import { selectDashboardReport } from "../selectors/Dashboard.selector";
import Dashboard from "../components/dashboard/Dashboard";
import { fetchReports } from "../actions/tab.action";
import { openModal } from "../actions/modal.action";

const mapStateToProps = state => ({
  reports: selectDashboardReport(state),
});
const mapDispatchToProps = dispatch => ({
  fetchReports: tab => dispatch(fetchReports(tab)),
  openNewTransactionModel: modal => dispatch(openModal(modal)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
