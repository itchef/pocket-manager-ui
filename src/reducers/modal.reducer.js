import {CLOSE_MODAL, OPEN_MODAL} from "../actions/actionTypes";

const modalReducer = (state = {}, action) => {
  if (action.type === OPEN_MODAL) return { ...state, activeModal: action.payload };
  if (action.type === CLOSE_MODAL) return { ...state, activeModal: null };
  return state;
};

export default modalReducer;
