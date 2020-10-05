import {combineReducers} from 'redux'

import authReducer from './slice/user'

export default combineReducers({
    auth: authReducer,
});
