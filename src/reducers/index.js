import { combineReducers } from "redux";
import salaryReducer from "./salary.reducer";
import headerReducer from "./header.reducer";
import modalReducer from "./modal.reducer";

export default combineReducers({
  salary: salaryReducer,
  headerDetails: headerReducer,
  modal: modalReducer,
});
