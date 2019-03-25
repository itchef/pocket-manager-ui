import { combineReducers } from "redux";
import salaryReducer from "./salary.reducer";
import headerReducer from "./header.reducer";

export default combineReducers({
  salary: salaryReducer,
  headerDetails: headerReducer,
});
