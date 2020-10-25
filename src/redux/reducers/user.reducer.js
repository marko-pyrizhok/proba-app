import {
    LOGIN_SUCCESS,
    LOGOUT
} from '../constants'

const initialState = {
    isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            const { name = 'anon' } = action.payload
            return {
                isLoggedIn: true,
                name,
            }
        }
        case LOGOUT: {
            return {
                isLoggedIn: false,
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer
