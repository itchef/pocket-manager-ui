import { FETCH_EXPENSES } from "../actions/actionTypes";

const headerDetails = (state = {}, action = {}) => {
  if (action.type === FETCH_EXPENSES) return { ...state, tab: { current: action.payload } };
  return state;
};

export default headerDetails;
