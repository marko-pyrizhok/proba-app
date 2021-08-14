import {
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGOUT
} from '../../constants'

const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAILURE: {
            return {
                isLoggedIn: false,
                isLoggingIn: false,
                user: {}
            }
        }
        case LOGIN_PENDING: {
            return {
                isLoggedIn: false,
                isLoggingIn: true,
                user: {},
            }
        }
        case LOGIN_SUCCESS: {
            return {
                isLoggedIn: true,
                isLoggingIn: false,
                user: action.payload,
            }
        }
        case LOGOUT: {
            return {
                isLoggedIn: false,
                isLoggingIn: false,
                user: {}
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer
