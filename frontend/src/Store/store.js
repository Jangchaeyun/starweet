import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "react-redux";

const rootReducers = combineReducers({
    
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
