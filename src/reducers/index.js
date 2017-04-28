/**
 * Created by wayne on 2017/4/26.
 */
import { combineReducers } from 'redux'
import user from './user'
import picture from './picture'
import reading from './reading'

const rootReducer = combineReducers({
    user,
    picture,
    reading,
});

export default rootReducer;