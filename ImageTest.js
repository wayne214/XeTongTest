/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
/**
 * ES6写法
 * 推荐写法
 */
export default class ImageTest extends Component{
    render(){
        return(
        <View>
            <Image
                source={require('./qiqiu.png')}
            />
            <Image
                style={{width:60,height:60}}//加载网络图片，需要设置宽高，否则无法完成渲染
                source={{uri:'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=汽车之家&step_word=&hs=0&pn=17&spn=0&di=54891564310&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2946233230%2C2457071887&os=3200553823%2C359550486&simid=3426240035%2C112182257&adpicid=0&lpn=0&ln=1997&fr=&fmq=1490000917144_R&fm=rs5&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=汽车&objurl=http%3A%2F%2Fwww0.autoimg.cn%2F2010%2F11%2F23%2F23-17-52-26-249552790.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bw7p5i54j_z%26e3Bv54_z%26e3BvgAzdH3Ft42AzdH3F%3Ft42%3Dda8aAzdH3F88AzdH3FdnAzdH3Fdn-80-cd-dm-d9lccd0la_z%26e3B3r2&gsm=0&rpstart=0&rpnum=0'}}
            />

        </View>
        // {/*//引用原生图片*/}
        // {/*<Image*/}
        // {/*style={{width:60,height:60,tintColor:'red'}}//加载网络图片，需要设置宽高，否则无法完成渲染*/}
        // {/*source={{uri:'qiqiu'}}*/}
        // {/*/>*/}
        // {/*//本地文件系统中的资源*/}
        // {/*<Image*/}
        // {/*style={{width:60,height:60,tintColor:'red'}}//加载网络图片，需要设置宽高，否则无法完成渲染*/}
        // {/*source={{uri:'qiqiu'}}*/}
        // {/*/>*/}
        )
    }
}


