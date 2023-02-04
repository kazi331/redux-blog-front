import { DELETE_A_POST, GET_A_POST, LOAD_ALL_POST, READ_A_POST, SAVE_A_POST } from '../actions/actionsTypes'

const initialState = {
    posts: [],
    saved: [],
    reading: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_POST:
            return { ...state, posts: action.payload }
        case SAVE_A_POST:
            return {
                ...state,
                saved: [...state.saved, action.payload]
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