/**
 * Created by wayne on 2017/4/26.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import  createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk' //引入异步操作
//引入所有的reducers ,切记要在index.js封装下
import rootReducer from '../reducers/index'

const middlewares = [];

middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV === 'development'){
    middlewares.push(createLogger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//配置store信息
export default function configureStore(initialState) {
    //将reducer组合起来
    // const reducer = combineReducers(rootReducer)

    //创建store
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}