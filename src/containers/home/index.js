/**
 * Created by wayne on 2017/4/26.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import bannerImg1 from '../../../assets/imgs/banner_coldline.png';
import bannerImg2 from '../../../assets/imgs/banner_pushMsg.png';
import bannerImg3 from '../../../assets/imgs/banner_slogan.png';

import Swiper from 'react-native-swiper';
import {
    WHITE_COLOR,
    BLUE_TEXT_COLOR,
    BLUE_CIRCLE_COLOR,
    ORANGE_CIRCLE_COLOR,
    RED_CIRCLE_COLOR,
    DEVIDE_LINE_COLOR
} from '../../constants/staticColor';
const {width,height} = Dimensions.get('window')
class index extends Component {
    constructor(props) {
        super(props);
        this.images=[
            bannerImg1,
            bannerImg2,
            bannerImg3,
        ];
    }
    componentDidMount() {

    }

    renderImg(){
        var imageViews=[];
        for(var i=0;i<this.images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{alignItems:'center',width:width,height:214}}
                    source={this.images[i]}
                />
            );
        }
        return imageViews;
    }
    render() {
        return <View style={styles.container}>
            <Swiper height={214}
                    width={width}
                    paginationStyle={{bottom:5}}
                    autoplay={true}
                    dot={<View style={{width:6,height:6,backgroundColor:WHITE_COLOR,borderRadius:3,marginLeft:3,marginRight:3}}></View>}
                    activeDot={<View style={{width:6,height:6,backgroundColor:BLUE_TEXT_COLOR,borderRadius:3,marginLeft:3,marginRight:3}}></View>}
            >
                {this.renderImg()}
            </Swiper>
        </View>
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
    }
})

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(index);