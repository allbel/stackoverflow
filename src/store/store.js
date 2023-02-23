import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {searchReducer} from "./search-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  search: searchReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

window.store = store;
