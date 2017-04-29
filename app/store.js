import { applyMiddleware, createStore, compose} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(promise(), thunk, logger()),
));