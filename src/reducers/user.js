/**
 * Created by wayne on 2017/4/26.
 */
import Immutable from 'immutable'
import * as ActionTypes from '../constants/actionType'
import Storage from '../utils/storage'

// const initState = Immutable.fromJS({
//     isLogin: false,
//     userInfo: null,
// })
//
// export default (state = initState, action) =>{
//     let _state = state;
//     switch (action.type) {
//         case ActionTypes.ACTION_LOGIN_SUCCESS:
//             _state = _state.set('userInfo',action.payload)
//             return _state;
//
//         default:
//             return state
//     }
// }

// 初始状态
const initialState = {
    status: 'init', // init,doing,done
    isSuccess: false,
    user: null,
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ACTION_LOGIN_IN_INIT: // 初始状态
            return Object.assign({}, state, {
                status: 'init',
                isSuccess: false,
                user: null
            });
        case ActionTypes.ACTION_LOGINING: // 正在登录
            return Object.assign({}, state, {
                status: 'doing',
                isSuccess: false,
                user: null
            });
        case ActionTypes.ACTION_LOGIN_SUCCESS: // 登录完成
            return Object.assign({}, state, {
                status: 'done',
                isSuccess: action.isSuccess,
                user: action.user
            })
        default:
            return state;
    }
}