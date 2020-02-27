import { combineReducers } from "redux";
import Test from "./Test";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  Test,
  form: reduxFormReducer
});
