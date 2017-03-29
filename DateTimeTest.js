/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Swiper from 'react-native-swiper'
export default class SwiperTest extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Swiper height={200}
                    paginationStyle={{bottom:10}}
                    autoplay={true}
                    dot={<View style={{width:8,height:8,backgroundColor:'white',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                    activeDot={<View style={{width:8,height:8,backgroundColor:'orange',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
            >
                {this.renderImg()}
            </Swiper>
        )
    }
    renderImg(){
        var imageViews=[];
        for(var i=0;i<this.images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1,}}
                    source={{uri:this.images[i]}}
                />
            );
        }
        return imageViews;
    }
}


