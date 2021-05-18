export const ADDING_TO_HISTORY = 'ADDING_TO_HISTORY'

export const addToHistory = (search) => dispatch => {
    dispatch({type: ADDING_TO_HISTORY, payload: search})
}