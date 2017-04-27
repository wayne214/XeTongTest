/**
 * Created by wayne on 2017/4/26.
 */
import { combineReducers } from 'redux'
import user from './user'
import picture from './picture'

const rootReducer = combineReducers({
    user,
    picture,
});

export default rootReducer;