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
        this.images=[
            'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
            'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
            'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
            'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
            'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
        ];
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


