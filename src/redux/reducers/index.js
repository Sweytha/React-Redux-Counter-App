// Our redux/reducers/index.js file is an optional addition to our workflow. We're using this file to combine our reducers into one exportable variable called "reducer", so we can pass it along to our app without having to import each reducer separately:

// We start by importing the reducers from their respective files:
import counter from "./counterReducer";


// Then import the combineReducers function from redux:
import { combineReducers } from "redux";

// We put them together with combineReducers, then export them so they're available to the rest of the app:
const reducer = combineReducers({
  counter
  
});

export default reducer;