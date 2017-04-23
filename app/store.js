import { applyMiddleware, createStore, compose} from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware)
