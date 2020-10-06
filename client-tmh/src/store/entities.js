import {combineReducers} from 'redux'

import userReducer from './slice/user'

export default combineReducers({
    user: userReducer,
});
