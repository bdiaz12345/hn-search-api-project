import { ADDING_TO_HISTORY } from '../action/index'

const initialState = {
    history: []
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case(ADDING_TO_HISTORY):
            return ({
                ...state,
                history: [...state.history, action.payload]
            })
        default:
            return state
    }
}