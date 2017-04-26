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
import HelloComponents,{name,age,sum} from "./HelloComponents"
import LifeCycleComponents from "./LifeCycleComponents"
import RefTest from "./RefTest"
import StateTest from "./StateTest"
import ImageTest from "./ImageTest"
import BannerTest from "./BannerTest"
import SwiperTest from "./SwiperTest"
import RefreshControlTest from "./RefreshControlTest"
import DateTimeTest from "./DateTimeTest"
import DateTimePicker from "./DateTimePicker"
import Picker from "./Picker"
import DropdownMen from "./Dropdown"
import PulltoReflesh from "./PulltoReflesh"
import PulltoRefresh from "./PulltoRefresh"
import Pull from "./Pull"
import ImagePickers from './ImagePickers'

import { Provider } from 'react-redux';
import configureStore from './src/store/store'; //获取store


import ViewPagerss from "./ViewPagerss"

import Login from './src/containers/login'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state=({
            result:'',
            size:'',
        })

    }
    render() {
        var params={name:'小王',age:22,sex:'女'}//扩展运算符
        var {name,sex}=params;//解构赋值
        return (

            //<ImagePickers/>
            <Navigator
                initialRoute={{id: 'Login', component: Login}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
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
        if (route.sceneConfig) { // 有设置场景
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
    }

    renderScene(route, navigator) {
        return <route.component {...route.passProps} navigator= {navigator}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});