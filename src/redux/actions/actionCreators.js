import { CLEAR_FILTER, TOGGLE_FILTER, TOGGLE_SORT } from "./actionsTypes"

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