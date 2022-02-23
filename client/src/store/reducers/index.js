//this file contains all our reducers in one place
// combineReducers method from redux to merge all our reducers which we are importing
import { combineReducers } from 'redux';
// Import the Module reducers here to combine them
import phoneReducer from './phoneReducer';


// combineReducer -> combine the reducers to a single reducer function
export default combineReducers( {
    // all the reducers go here
    // rest of your reducers
    phonesList: phoneReducer
})
