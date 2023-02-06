import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from "./reducers/postReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import filterReducer from "./reducers/filterReducer";
import thunk from 'redux-thunk';
import { reading } from "./middleware/reading";


const rootReducer = combineReducers({
    post: postReducer,
    filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, reading)))
export default store;
