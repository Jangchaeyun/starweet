import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { starweetReducer } from "./Starweet/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  starweet: starweetReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
