import { combineReducers } from "redux";
import loginReducer from "./login";
const allReduces = combineReducers(
    {
        loginReducer,
    }
)
export default allReduces;