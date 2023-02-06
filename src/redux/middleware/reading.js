import { ADD_TO_READING } from "../actions/actionsTypes";

export const reading = (store) => (next) => (action) => {
    const readings = store.getState().post.reading;
    if (action.type === ADD_TO_READING) {
        const newAction = {
            ...action,
            payload: { ...action.payload, order: readings.length + 1 }
        }

        console.log(newAction);
        return next(newAction)
    }

    return next(action)
}
