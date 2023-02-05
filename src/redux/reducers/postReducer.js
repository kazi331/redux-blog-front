import { DELETE_A_POST, LOAD_ALL_POST, READ_A_POST, TOGGLE_BOOKMARK } from '../actions/actionsTypes'

const initialState = {
    posts: [],
    bookmark: [],
    reading: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_POST:
            return { ...state, posts: action.payload }
        case TOGGLE_BOOKMARK:
            if (state.bookmark.includes(action.payload)) {
                return {
                    ...state,
                    bookmark: state.bookmark.filter(post => post !== action.payload)
                }
            }
            return {
                ...state,
                bookmark: [...state.bookmark, action.payload]
            }
        case READ_A_POST:
            return {
                ...state,
                reading: [...state.reading, action.payload]
            }
        case DELETE_A_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        default:
            return state;
    }

}

export default postReducer;