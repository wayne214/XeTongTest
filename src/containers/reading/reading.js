/**
 * Created by wayne on 2017/4/26.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
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
import ReadingBottomViewPager from './readingBottomViewPager'
import * as RouteType from '../../constants/routeType'

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
                <View style={{flex: 1}}>
                    <ReadingBottomViewPager/>
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

        this.props.router.redirect(RouteType.READING_CAROUSEL_DETAIL,{
            readingCarousel:data
        })
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
                url:API.API_READING_BANNER_IMAGES,
                successCallBack:(response) =>{
                    getReadingBannerImageListCallBack(response.data)
                }

            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reading);