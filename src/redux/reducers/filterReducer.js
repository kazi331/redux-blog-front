import { TOGGLE_FILTER, CLEAR_FILTER, TOGGLE_SORT, SEARCH_POST } from "../actions/actionsTypes"

const initialState = {
    filter: [],
    sort: "",
    search: "",
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return {
                ...state,
                filter: state.filter.includes(action.payload) ?
                    state.filter.filter(item => item !== action.payload) :
                    [...state.filter, action.payload]
            };
        case CLEAR_FILTER:
            return { ...state, filter: [] };
        case TOGGLE_SORT:
            return { ...state, sort: action.payload }
        case SEARCH_POST:
            return {
                ...state, search: action.payload
            }
        default: return state;
    }
}

export default filterReducer;
