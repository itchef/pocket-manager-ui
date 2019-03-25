import { SELECT_TAB } from "../actions/actionTypes";

const headerReducer = (state = {}, action = {}) => {
  if (action.type === SELECT_TAB) return { ...state, tab: { current: action.payload } };
  return state;
};

export default headerReducer;
