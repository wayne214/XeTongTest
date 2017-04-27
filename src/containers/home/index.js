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

import {
    WHITE_COLOR,
    BLUE_TEXT_COLOR,
    BLUE_CIRCLE_COLOR,
    ORANGE_CIRCLE_COLOR,
    RED_CIRCLE_COLOR,
    DEVIDE_LINE_COLOR
} from '../../constants/staticColor';
const {width,height} = Dimensions.get('window')

import PicturePage from '../../components/picture/picturepage'
import ViewPager from 'react-native-viewpager';

import {getPictureIdList,receiverIdList} from '../../actions/picture'
import * as API from '../../constants/api'

import {ToastMessage} from '../../utils/toast'
class index extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource: new ViewPager.DataSource({
                    pageHasChanged:(p1, p2) => p1 !== p2
            })
        }
        this.fetchData = this.fetchData.bind(this)
        this._getPictureIdListCallBack = this._getPictureIdListCallBack.bind(this)
        this._renderPage = this._renderPage.bind(this)
    }

    fetchData(getPictureIdListCallBack){
        this.props.getPictureIdList({},getPictureIdListCallBack)
    }
    _getPictureIdListCallBack(idList){
        console.log('result',idList)
        this.setState({
            dataSource:this.state.dataSource.cloneWithPages(idList)
        })
    }
    componentDidMount() {
        this.fetchData(this._getPictureIdListCallBack)
    }

    render() {
        return <View style={styles.container}>
            <ViewPager
                style={{flex: 1}}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                renderPageIndicator={false}
                onBeyondRange={this.onBeyondRange}
            />
        </View>
    }

    onBeyondRange(num){
        if (num){
            ToastMessage('右拉刷新页面')
        }else{
            ToastMessage('左滑进入往期列表')
        }
    }
    _renderPage(data,pageID){
        console.log('pageiD',data)
        return(
            <PicturePage id={data}/>
        )

    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row'
    }
})

const mapStateToProps = (state) => {
    // console.log('pictureIDlIST,,,',state.picture.get('pictureIdList'))
    return {
        picture: state.picture,
        pictureIdList: state.picture.get('pictureIdList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPictureIdList:(params,getPictureIdListCallBack) => {
            dispatch(getPictureIdList({
                url:API.API_GET_PICTURE_ID_LIST,
                successMsg:'获取图片id列表成功',
                successCallBack:(response)=>{
                    console.log('response',response.data)
                    getPictureIdListCallBack(response.data)
                    // dispatch(receiverIdList(response.data))
                },
                failCallBack:(err)=>{

                }
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);