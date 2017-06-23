import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
    Dimensions
} from 'react-native';
import * as API from '../../constants/api'
import {getMusicDetailPage} from '../../actions/music'
import BottomInfo from '../../components/bottomInfo'
const {width} = Dimensions.get('window')
import * as StaticColor from '../../constants/staticColor'

import MusicPlay from '../../components/music/musicPlay'
import MusicInfo from '../../components/music/musicInfo'


class musicDetailPage extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this._getMusicDetailPageDetailCallBack = this._getMusicDetailPageDetailCallBack.bind(this);
        this.state = {
            musicDetailData: {}
        }
    }


    fetchData(getMusicDetailPageDetailCallBack) {
        const {id} = this.props;
        console.log(',....id..;.;', id)
        this.props.getMusicDetailPage({pageId: id}, getMusicDetailPageDetailCallBack)
    }

    _getMusicDetailPageDetailCallBack(result) {
        console.log('detaillll', result)
        this.setState({
            musicDetailData: result
        })
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(this.fetchData(this._getMusicDetailPageDetailCallBack))
    }

    render() {
        const {musicDetailData} = this.state;
        const {praisenum, commentnum, sharenum} = musicDetailData;
        return (
            <ScrollView style={{flex: 1}}>
            {this.renderMusicDetail()}
            </ScrollView>


        )
    }

    renderMusicDetail() {
        const {musicDetailData} = this.state;
        console.log('musicDetailData', musicDetailData)
        //当数据还未请求到时, 不能直接返回null, 因为这里是作为ViewPager的子View
        //如果请求数据前后子View的大小宽高变化的话, 会产生跳动
        const {praisenum, commentnum, sharenum} = musicDetailData;
        //TODO 如何在Android平台实现类似contentOffset这样的功能属性, 拒绝重新渲染滚动, 否则体验很差
        return (
            <View>
                <Image style={styles.topImage} resizeMode="cover" source={{uri: musicDetailData.cover}}/>
                <MusicPlay musicDetailData={musicDetailData}/>
                <MusicInfo musicDetailData={musicDetailData}/>
                <Text style={styles.grayText}>{musicDetailData.charge_edt}</Text>
                <BottomInfo
                    praiseNum={praisenum}
                    commentNum={commentnum}
                    shareNum={sharenum}
                    onSharePressed={this.onSharePressed}/>
                <View style={styles.grayViewContainer}>
                    <Text style={styles.lightGrayText}>评论列表</Text>
                </View>
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMusicDetailPage: (params, getMusicDetailPageDetailCallBack) => {
            dispatch(getMusicDetailPage({
                url: API.API_MUSIC_DETAIL_PAGE + params.pageId,
                successCallBack: (response) => {
                    console.log('responseDeatail', response.data)
                    getMusicDetailPageDetailCallBack(response.data)
                },
                failCallBack: (err) => {

                }
            }))
        }
    }
}

const styles = StyleSheet.create({
    topImage: {
        width: width,
        height: width / 3 * 1//暂时占屏幕高度三分之一
    },
    grayText: {
        color: StaticColor.TEXT_GRAY_COLOR,
        margin: 15,
        fontSize: 12
    },
    grayViewContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: StaticColor.LIGHT_GRAY_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lightGrayText: {
        color: StaticColor.TEXT_GRAY_COLOR,
        fontSize: 14
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(musicDetailPage);