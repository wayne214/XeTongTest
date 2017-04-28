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
    Dimensions,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

import ViewPager from 'react-native-viewpager';

const {width,height} = Dimensions.get('window')

import {getReadingImageList} from '../../actions/reading'
import * as API from '../../constants/api'

const HEIGHT = 150;
class reading extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource: new ViewPager.DataSource({
                pageHasChanged:(p1, p2) => p1 !== p2
            })
        }

        this.fetchData = this.fetchData.bind(this)
        this._getReadingBannerImageListCallBack = this._getReadingBannerImageListCallBack.bind(this)
        this._renderPage = this._renderPage.bind(this)
    }

    fetchData(getReadingBannerImageListCallBack){
        this.props.getReadingImageList({},getReadingBannerImageListCallBack)
    }
    _getReadingBannerImageListCallBack(result){
        console.log('readingresult',result)
        this.setState({
            dataSource:this.state.dataSource.cloneWithPages(result)
        })
    }

    componentDidMount() {
        this.fetchData(this._getReadingBannerImageListCallBack)
    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{height:150,flexDirection:'row'}}>
                <ViewPager
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                />
                </View>
            </View>
        )
    }

    _renderPage(data,pageID){
        return (
            <TouchableOpacity ACTIVEOPACITY={1} onPress={()=>{this.onPress(data)}} style={{flexDirection:'column'}}>
                <Image style={styles.image} source={{uri: data.cover}}/>
            </TouchableOpacity>
        )
    }

    onPress(data){
        alert(data.title)
    }
}

const styles =StyleSheet.create({
    container: {
        width: width,
        height: HEIGHT,
    },
    image: {
        width: width,
        height: HEIGHT,
        resizeMode: 'cover'
    }
})

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReadingImageList:(params,getReadingBannerImageListCallBack) =>{
            dispatch(getReadingImageList({
                url:API.API_REANDING_BANNER_IMAGES,
                successCallBack:(response) =>{
                    getReadingBannerImageListCallBack(response.data)
                }

            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reading);