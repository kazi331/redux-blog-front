import { ADD_CONTENT, ADD_TO_READING, DELETE_CONTENT, GET_CONTENT, TOGGLE_BOOKMARK, UPDATE_CONTENT } from '../actions/actionsTypes'

const initialState = {
    posts: [],
    bookmark: [],
    reading: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
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
                const newReadingList = state.reading.filter(post => post._id !== action.payload._id);
                return {
                    ...state,
                    reading: [...newReadingList, action.payload]
                };
            }
            return {
                ...state,
                reading: [...state.reading, action.payload]
            }

        case DELETE_CONTENT:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }

        case ADD_CONTENT:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case UPDATE_CONTENT: {
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)

            }
        }
        default:
            return state;
    }

}

export default postReducer;
