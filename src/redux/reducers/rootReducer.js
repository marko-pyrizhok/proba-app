import { combineReducers } from 'redux'
import applicationReducer from './application.reducer'
import userReducer from './user.reducer'
import probaReducer from './probaPoints.reducer'

export default combineReducers({
    application: applicationReducer,
    user: userReducer,
    proba: probaReducer,
})
