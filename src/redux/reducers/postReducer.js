import { CREATE_A_POST, DELETE_A_POST, LOAD_ALL_POST, ADD_TO_READING, TOGGLE_BOOKMARK } from '../actions/actionsTypes'

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
        case ADD_TO_READING:
            if (state.reading.find(post => post._id === action.payload._id)) {
                console.log('includes');
                return state;
            }
            return {
                ...state,
                reading: [...state.reading, action.payload]
            }
        case DELETE_A_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        case CREATE_A_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }

}

export default postReducer;
