import { connect } from "react-redux";
import TransactionForm from "../components/modal/TransactionForm";
import { selectActiveModal } from "../selectors/Modal.selector";
import { ADD_TRANSACTION_MODAL } from "../constants/modal";
import { closeModal } from "../actions/modal.action";

const mapStateToProps = state => ({
  isActive: selectActiveModal(state) === ADD_TRANSACTION_MODAL,
});

const mapDispatchToProp = dispatch => ({
  onClose: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(TransactionForm);
