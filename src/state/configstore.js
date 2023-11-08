import { createStore,combineReducers } from "redux";
import { colourReducer } from "./reducer/colourReducer";

export const configstore=()=>{
    const store=createStore(
combineReducers({colourReducer}),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}