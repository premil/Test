
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";                                    // asynchronus action handler (API call)
import rootreducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";     // redux developer tools


const initialState = {};

/* <==========  Create Store  ==========> */
/* <====================================> */
const store = createStore(
    rootreducer,                                // can access to store, only to rootreducer
    initialState,                               // initialState  ==>  empty object
    composeWithDevTools(applyMiddleware(thunk),
    )
);

export default store;