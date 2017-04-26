/**
 * Created by wayne214 on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/store/store'; //获取store
import App from './app'
const store = configureStore();

export default class Root extends Component {
    constructor(props){
        super(props);


    }
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('XeTongTest', () => Root);