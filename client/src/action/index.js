export const ADDING_TO_HISTORY = 'ADDING_TO_HISTORY'
export const CLEARING_HISTORY = 'CLEARING_HISTORY'
export const SAVE_TO_HISTORY = 'SAVE_TO_HISTORY'

export const addToHistory = (search) => dispatch => {
    dispatch({type: ADDING_TO_HISTORY, payload: search})
}

export const clearHistory = () => dispatch => {
    dispatch({type: CLEARING_HISTORY})
}

export const saveToHistory = (data) => dispatch => {
    dispatch({type: SAVE_TO_HISTORY, payload: data})
}