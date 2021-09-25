import { combineReducers } from "redux";
import users from "./authReducer";
import message from "./messageReducer";


/* <==========  Create rootReducer  ==========> */
/* <==========================================> */
const rootreducer = combineReducers({
    users: users,                      // import all reducers in rootReducer                                    
    message: message,                  
});

export default rootreducer;