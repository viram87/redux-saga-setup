import { combineReducers } from "redux";
// import anotherReducer from "./anotherReducer";
import formReducer from '../reducer/formReducer/formReducer'

const rootReducer = combineReducers({
//   another: anotherReducer,
    formReducer : formReducer
});

export default rootReducer;
