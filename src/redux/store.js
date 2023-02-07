import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { reading } from "./middleware/reading";
import filterReducer from "./reducers/filterReducer";
import postReducer from "./reducers/postReducer";


const rootReducer = combineReducers({
    post: postReducer,
    filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, reading)))
export default store;
