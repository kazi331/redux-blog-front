import { ADD_TO_READING, CLEAR_FILTER, TOGGLE_BOOKMARK, TOGGLE_FILTER, TOGGLE_SORT } from "./actionsTypes"

export const toggleFilter = (tag) => {
    return {
        type: TOGGLE_FILTER,
        payload: tag
    }
}
export const clearFilter = () => {
    return { type: CLEAR_FILTER }
}
export const toggleSort = (value) => {
    return { type: TOGGLE_SORT, payload: value }
}
export const toggleBookmark = (post) => {
    return { type: TOGGLE_BOOKMARK, payload: post }
}
export const addToReading = (post) => {
    return { type: ADD_TO_READING, payload: post }
}
