/**
 *
 * Created by wayne on 2017/4/27.
 */
import * as ActionType from '../constants/actionType'
import Http from '../utils/http'


export const changeTabBarAction = tab =>{
    return {
        type: ActionType.ACTION_CHANGE_TAB,
        payload: { tab }
    }
}


