import { combineReducers } from "redux";
import salaryReducer from "./salary.reducer";
import headerDetails from "./header.reducer";

export default combineReducers({
  salaryReducer,
  headerDetails,
});
