import { connect } from "react-redux";
import { selectDashboardReport } from "../selectors/Dashboard.selector";
import Dashboard from "../components/dashboard/Dashboard";
import { fetchReports } from "../actions/tab.action";

const mapStateToProps = state => ({
  reports: selectDashboardReport(state),
});
const mapDispatchToProps = dispatch => ({
  fetchReports: tab => dispatch(fetchReports(tab)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
