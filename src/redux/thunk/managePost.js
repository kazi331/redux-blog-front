import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actions/actionsTypes";



// create new post

export const createPost = (post) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://redux-blog.onrender.com/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
        const data = await res.json();
        console.log(data)
        if (data.success) {
            dispatch({
                type: ADD_CONTENT,
                payload: data.post
            })
        }
        return data;
    }
}


// load all post

export const loadAllPost = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://redux-blog.onrender.com/posts')
        const data = await res.json();
        if (data.success) {
            dispatch({
                type: GET_CONTENT,
                payload: data.posts
            })
        }
    }
}


// delete post
export const deletePost = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://redux-blog.onrender.com/post/${id}`, { method: 'DELETE' })
        const data = await res.json();
        console.log(data)
        if (data.success) {
            dispatch({
                type: DELETE_CONTENT,
                payload: id
            })
        }
    }
}

// edit post
export const editPost = (post) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://redux-blog.onrender.com/post/${post._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
        const data = await res.json();
        console.log(data)
        if (data.success) {
            dispatch({
                type: UPDATE_CONTENT,
                payload: post
            })
        }
        return data;
    }
}
