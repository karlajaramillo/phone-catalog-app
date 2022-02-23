import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
// reducer for phones
import rootReducer from "./reducers"; // onefunction that combines the reducers functions

// thunk as a middleware from redux
const middleware = [thunk]

// create store for state
const store = createStore(
    rootReducer, // Root reducer with router state
    // composeWithDevTools to work with redux devtools chrome extension
    composeWithDevTools(applyMiddleware(...middleware))
  )
  export default store;
