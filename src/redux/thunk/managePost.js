import { DELETE_A_POST } from "../actions/actionsTypes";

export const deletePost = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/post/${id}`, {method: 'DELETE'})
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