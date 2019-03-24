import { connect } from "react-redux";
import HeaderTab from "../../components/tab/HeaderTab";
import { selectCurrentTab } from "../../selectors/HeaderTab.selector";
import { fetchExpenseDetails } from "../../actions/tab.action";

const mapStateToProps = state => ({
  value: selectCurrentTab(state),
});

const mapDispatchToProps = dispatch => ({
  onTapTab: (event, next) => dispatch(fetchExpenseDetails(next)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderTab);
