import {
    GET_PROBA_POINTS,
    GET_PROBA_POINTS_FAILURE,
    GET_PROBA_POINTS_SUCCESS
} from '../../constants'

const initialState = {
    points: [],
    probaId: null,
    loading: false,
    hasErrors: false
}

const probaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROBA_POINTS: {
            return {
                points: [],
                probaId: null,
                loading: true,
                hasErrors: false
            }
        }
        case GET_PROBA_POINTS_FAILURE: {
            return {
                points: [],
                probaId: null,
                loading: false,
                hasErrors: true
            }
        }
        case GET_PROBA_POINTS_SUCCESS: {
            return {
                points: action.payload.pointStateList,
                probaId: action.payload.probaId,
                loading: false,
                hasErrors: false
            }
        }
        default: {
            return state
        }
    }
}

export default probaReducer
