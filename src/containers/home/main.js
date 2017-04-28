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

import homen from '../../../assets/img/home.png'
import homeActive from '../../../assets/img/home_active.png'
import reading from '../../../assets/img/reading.png'
import readingActive from '../../../assets/img/reading_active.png'
import music from '../../../assets/img/music.png'
import musicActive from '../../../assets/img/music_active.png'
import move from '../../../assets/img/movie.png'
import moveActive from '../../../assets/img/movie_active.png'


import Index from '../../containers/home/index'
import Reading from '../../containers/reading/reading'

import * as StaticColor from '../../constants/staticColor'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedTab: 'home'
        }
    }

    render(){
        var homeView=(
            <View style={[styles.flex,styles.center,{backgroundColor: StaticColor.COLOR_MAIN}]}>
                <Index/>
            </View>
        );
        var readingView=(
            <View style={[styles.flex,{backgroundColor: StaticColor.COLOR_MAIN}]}>
                <Reading/>
            </View>
        );
        var musicView=(
            <View style={[styles.flex,styles.center,{backgroundColor: StaticColor.COLOR_MAIN}]}>
                <Text style={{fontSize: 30}}>音乐</Text>
            </View>
        );
        var movieView=(
            <View style={[styles.flex,styles.center,{backgroundColor: StaticColor.COLOR_MAIN}]}>
                <Text style={{fontSize: 30}}>电影</Text>
            </View>
        );
        return (
            <TabNavigator
                tabBarStyle={{ flex: 1, justifyContent:'center', alignItems:'center'}}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Image style={styles.img} source={homen}/>}//默认图标
                    renderSelectedIcon={() => <Image style={styles.img} source={homeActive }/>}//选中图标
                    //badgeText="9+"//消息数目
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'reading'}
                    renderIcon={() => <Image style={styles.img} source={reading }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={readingActive }/>}
                    onPress={() => this.setState({ selectedTab: 'reading' })}
                >
                    {readingView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'music'}
                    renderIcon={() => <Image style={styles.img} source={music }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={musicActive }/>}
                    onPress={() => this.setState({ selectedTab: 'music' })}
                >
                    {musicView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'movie'}
                    renderIcon={() => <Image style={styles.img} source={move }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={moveActive }/>}
                    onPress={() => this.setState({ selectedTab: 'movie' })}
                >
                    {movieView}
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
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
})