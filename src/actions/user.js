/**
 * Created by wayne on 2017/4/26.
 */
import * as ActionTypes from '../constants/actionType'

//模拟服务器返回的用户信息
let user = {
    'name' : 'admin',
    'age': '24'
}
//执行登录
export function doLogin() {
    return dispatch =>{
        dispatch(isLogining());
        let result = fetch('https://github.com/').then((res)=>{
            dispatch(loginSuccess(true, user));
        }).catch((e) => {
            dispatch(loginSuccess(false, null))
        })
    }

}

// 正在登录
function isLogining() {
    return {
        type: ActionTypes.ACTION_LOGINING
    }
}

// 登录完成
function loginSuccess(isSuccess, user) {
    return {
        type: ActionTypes.ACTION_LOGIN_SUCCESS,
        isSuccess: isSuccess,
        user: user
    }
}