/**
 * Created by wayne on 2017/4/27.
 */

import Immutable from 'immutable'
import * as ActionType from '../constants/actionType'

const initState = Immutable.fromJS({
    pictureIdList:[],

})

export default (state = initState, action) => {
    let _state = state;
    switch (action.type) {
        case ActionType.ACTION_GET_PICTURE_ID_LIST:
            console.log('pictureIdlIST',action.payload)
            _state = _state.set('pictureIdList',action.payload)
            return _state;
        default:
            return state;
    }
}