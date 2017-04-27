/**
 *
 * Created by wayne on 2017/4/27.
 */
import * as ActionType from '../constants/actionType'
import Http from '../utils/http'

export const getPictureIdList = ({...params}) =>{
    return dispatch =>{
        return Http({...params}).then(response => {
            params.successCallBack && params.successCallBack(response)
        },err =>{
            params.failCallBack && params.failCallBack(err)
        }).catch(error => console.log(error))
    }
}
export const receiverIdList = data => {
    return {
        type: ActionType.ACTION_GET_PICTURE_ID_LIST,
        payload: data
    }
}
//获取图片详情
export const getPictureDetail = ({...params}) =>{
    return dispatch =>{
        return Http({...params}).then(response => {
            console.log('detail',response)
            params.successCallBack && params.successCallBack(response)
        },err =>{
            params.failCallBack && params.failCallBack(err)
        }).catch(error => console.log(error))
    }
}



