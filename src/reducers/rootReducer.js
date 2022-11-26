import { combineReducers } from "redux";
import testReducer from "./testReducer";
import counterReducer from "./counterReducer";
import userReducser from "./userReducser";
const rootReducer = combineReducers({
    test: testReducer,
    counter: counterReducer,
    users: userReducser
});
export default rootReducer;