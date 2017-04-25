/**
 * Created by wayne214 on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Animated,
    Easing
} from 'react-native';

import ViewPager from 'react-native-viewpager';
const {width,height} = Dimensions.get('window');
const BANNER_IMGS = [
    require('./imgs/banner_coldline.png'),
    require('./imgs/banner_pushMsg.png'),
    require('./imgs/banner_slogan.png'),
];
export default class ViewPagerss extends React.Component {

    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        })

        this.state={
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            index:0
        }
    }

    componentDidMount(){
    }

    _renderPage(data, pageID) {
        return (

         <Image
            source={data}
            style={styles.page}/>
        );
    }

    /**
     dataSource: 提供页面数据,
     renderPage: 用于渲染页面视图,
     autoPlay: 为true 将自动播放,
     isLoop: 为true支持循环播放,
     locked: 为true禁止触摸滚动,
     onChangePage: 页面变化的回调,
     renderPageIndicator: 渲染自定义的 ViewPager indicator.
     */
    render() {
        return(
            <View style={{flex:1,paddingTop:20,alignItems:'center'}}>
                <Text style={{fontSize:30,color:'red'}}>{this.state.index + 1 + "/" + 3}</Text>
                    <View style={styles.container}>
                        <ViewPager
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            isLoop={true}
                            // autoPlay={true}
                            renderPageIndicator={false}
                            onChangePage={
                                (pagepageNumber) => {
                                    this.setState({
                                        index:pagepageNumber
                                    })
                                }
                            }
                        />
                    </View>

            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop:5,
        paddingLeft:5,
        backgroundColor:'#999999',
        paddingRight:5,
        paddingBottom:5,
    },
    page: {
        flex:1,
        width: width,//设备宽(只是一种实现，此处多余)
        resizeMode: 'contain'
    },
});

