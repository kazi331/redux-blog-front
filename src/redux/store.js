import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from "./reducers/postReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import filterReducer from "./reducers/filterReducer";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    post: postReducer,
    filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;


