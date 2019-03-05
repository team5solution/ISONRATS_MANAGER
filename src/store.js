import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
