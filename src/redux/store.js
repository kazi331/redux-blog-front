import { combineReducers, createStore } from "redux";
import postReducer from "./reducers/postReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import filterReducer from "./reducers/filterReducer";


const rootReducer = combineReducers({
    post: postReducer,
    filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools())
export default store;


