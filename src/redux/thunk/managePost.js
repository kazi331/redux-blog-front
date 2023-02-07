import { CREATE_A_POST, DELETE_A_POST } from "../actions/actionsTypes";

// delete post
export const deletePost = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/post/${id}`, { method: 'DELETE' })
        const data = await res.json();
        console.log(data)
        if (data.success) {
            dispatch({
                type: DELETE_A_POST,
                payload: id
            })
        }
    }
}

// create new post

export const createPost = (post) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
        const data = await res.json();
        console.log(data.post)
        if (data.success) {
            dispatch({
                type: CREATE_A_POST,
                payload: data.post
            })
        }
        return data;
    }
}
