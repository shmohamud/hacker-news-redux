import queriesReducer from "./queries";
import { combineReducers } from "redux";

// Should show queries state in Redux tools
const allReducers = combineReducers({
  queries: queriesReducer
});

export default allReducers;