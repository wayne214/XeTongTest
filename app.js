/**
 * Created by wayne on 2017/4/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    StatusBar,
    BackAndroid,
} from 'react-native';

import Login from './src/containers/login'
import Main from './src/containers/app/main'
import Router from './src/constants/router'

export default class App extends Component {
    constructor(props){
        super(props);
        this.renderScene = this.renderScene.bind(this)

    }
    render() {
        return (
        <View style={{flex: 1}}>
            <StatusBar
                backgroundColor='#2562b4'
                barStyle='light-content'/>
            <Navigator
                ref='navigator'
                initialRoute={{name: 'Login', component: Main}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        </View>
        );
    }

    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack = () => {


        const navigator = this.refs.navigator;

        if (navigator && navigator.getCurrentRoutes().length > 1) {

            navigator.pop();

            return true;
        }
        return false;
    };

    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }




    configureScene(route, routeStack) {
        if (route.type === 'bottom') { // 有设置场景
            return Navigator.SceneConfigs.FloatFromBottom;//底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
    }

    renderScene(route, navigator) {
        // return <route.component {...route.passProps} navigator= {navigator}/>;
        this.router = this.router || new Router(navigator);
        const Component = route.component;
        return (
            <Component
                route={route}
                router={this.router}
                navigator={navigator}
            />
        )
    }
}