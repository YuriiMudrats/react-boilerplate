// MAIN MODULES
import  { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import thunk from "redux-thunk";

// MAIN REDUCERS
import mainReduser from '../reducers';


const store   = createStore(
    mainReduser,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axios)))
  );

export default store;  