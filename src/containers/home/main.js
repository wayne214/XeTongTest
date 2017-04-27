/**
 *
 * Created by wayne on 2017/4/26.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import homeNormal from '../../../assets/imgs/home_tab_home_normal.png'
import homePressed from '../../../assets/imgs/home_tab_home_pressed.png'
import meNormal from '../../../assets/imgs/home_tab_me_normal.png'
import mePressed from '../../../assets/imgs/home_tab_me_pressed.png'


import Index from '../../containers/home/index'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedTab: 'home'
        }
    }

    render(){
        var homeView=(
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffff0044'}]}>
                <Index/>
            </View>
        );
        var settingView=(
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffff0044'}]}>
                <Text style={{fontSize: 30}}>设置</Text>
            </View>
        );
        return (
            <TabNavigator
                tabBarStyle={{ height: 60 }}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页" //Tab文字
                    renderIcon={() => <Image style={styles.img} source={homeNormal}/>}//默认图标
                    renderSelectedIcon={() => <Image style={styles.img} source={homePressed }/>}//选中图标
                    badgeText="9+"//消息数目
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'setting'}
                    title="设置"
                    renderIcon={() => <Image style={styles.img} source={meNormal }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={mePressed }/>}
                    onPress={() => this.setState({ selectedTab: 'setting' })}
                >
                    {settingView}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    componentDidMount(){

    }
}
const  styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        // width: 40,
        // height: 33,
        resizeMode: 'cover'
    },
})