/**
 * Created by wayne on 16/10/11.
 */

import React, {PropTypes} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {parseDate} from '../../utils/dateUtil';
import monthArray from '../../constants/month';
import * as StaticColor from '../../constants/staticColor';
import {connect} from 'react-redux';
// import * as MediaActions from '../actions/media';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: -20,
        padding: 8,
        borderWidth: 1,
        borderColor: StaticColor.GRAY_COLOR,
        backgroundColor: '#baff96'
    },
    leftContainer: {
        justifyContent: 'space-between',
        flex: 1
    },
    rightContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    authorInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorInfo: {
        flex: 1,
        marginLeft: 10
    },
    authorName: {
        color: StaticColor.LIGHT_BLUE_COLOR,
        fontSize: 12
    },
    authorDesc: {
        color: StaticColor.TEXT_GRAY_COLOR,
        marginTop: 5,
        fontSize: 12
    },
    avatarImage: {
        height: 50,
        width: 50,
        // borderRadius: 25,
    },
    dateText: {
        color: StaticColor.TEXT_GRAY_COLOR,
        marginTop: 5,
        fontSize: 12
    },
    musicImage: {
        height: 40,
        width: 40,
    },
    xiamiImage: {
        width: 60,
        height: 20,
    },
    titleText: {
        color: StaticColor.TEXT_COLOR,
        fontSize: 18,
        marginTop: 5
    },
    transparentImage: {
        backgroundColor: 'transparent'
    }
});

class MusicPlay extends React.Component {

    constructor(props) {
        super(props);
        this.onMediaPressed = this.onMediaPressed.bind(this);
        this.renderPlayButton = this.renderPlayButton.bind(this);

    }

    render() {
        const {
            musicDetailData,
        } = this.props;
        if (!musicDetailData) {
            return null;
        }

        const date = new Date(musicDetailData.maketime);
        var day = date.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        const dateStr = `${monthArray[date.getMonth()]} ${day}.${date.getFullYear()}`;
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.authorInfoContainer}>
                        <TouchableOpacity style={{marginVertical: 5}} onPress={this.onAvatarImagePress}>
                            <Image style={styles.avatarImage} resizeMode="cover" source={{uri: musicDetailData.cover}}/>
                        </TouchableOpacity>
                        <View style={styles.authorInfo}>
                            <Text numberOfLines={2} style={styles.authorName}>{musicDetailData.title}</Text>
                            <Text numberOfLines={2} style={styles.authorDesc}>{musicDetailData.album}</Text>
                        </View>
                    </View>
                    <Text style={styles.titleText}>{musicDetailData.title}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Image style={styles.xiamiImage}
                           source={musicDetailData.platform == 1 ? require('../../../assets/img/xiami_right.png') : require('../../../assets/img/white.png')}
                           resizeMode="contain"/>
                    <TouchableOpacity onPress={() => { }//this.onMediaPressed
                    }>
                        {this.renderPlayButton()}
                    </TouchableOpacity>
                    <Text style={styles.dateText}>{dateStr}</Text>
                </View>
            </View>
        );
    }

    renderPlayButton() {
        const {isPlaying, isLoadingMedia} = this.props;
        let animating = isPlaying && isLoadingMedia;
        return (
            <Image style={[styles.musicImage, {alignItems: 'center', justifyContent: 'center'}]}
                   source={isPlaying ? require('../../../assets/img/music_pause.png') : require('../../../assets/img/music_play.png')}>
                {
                    animating ? <ActivityIndicator size="large" color="white"/> : null
                }
            </Image>
        );
    }

    onMediaPressed() {
        const {
            musicDetailData,
            stopPlayMedia,
            startPlayMedia,
            isPlaying,
            getXiamiMusicUrlAndPlay
        } = this.props;
        if (isPlaying) {
            //停止播放
            stopPlayMedia();
        } else {
            const {
                id,
                title,
                platform,
                music_id,
                author
            } = musicDetailData;
            //platform  '1'  虾米平台的
            //platform  '2'  ONE平台的  直接使用music_id, music_id就是文件地址
            var info = {
                id,
                type: 'music',
                musicName: title,
                authorName: author.user_name,
            };
            if (platform == 1) {
                getXiamiMusicUrlAndPlay(info, music_id);
            } else if (platform == 2) {
                startPlayMedia(Object.assign({}, info, {url: music_id}));
            } else {
                console.warn(`暂时未能处理该平台的音乐 platform = ${platform}`);
            }
        }
    }

}

// MusicPlay.propTypes = {
//     musicDetailData: PropTypes.object.isRequired,
//     stopPlayMedia: PropTypes.func.isRequired,
//     startPlayMedia: PropTypes.func.isRequired,
//     isPlaying: PropTypes.bool,//是否正在播放当前这一首歌曲
//     isLoadingMedia: PropTypes.bool.isRequired,//是否正在加载
//     getXiamiMusicUrlAndPlay: PropTypes.func.isRequired
// };

const mapStateToProps = (state, props) => {
    // var media = state.media;
    // var currentMedia = media.mediaList[media.currentIndex];
    return {
        // isPlaying: media.isPlayingMedia && currentMedia && currentMedia.type === 'music' && currentMedia.id === props.musicDetailData.id,
        // isLoadingMedia: media.isLoadingMedia
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getMusicIdList:(params,getMusicIdListCallBack) => {
        //     dispatch(getMusicIdList({
        //         url:API.API_MUSIC_ID_LIST,
        //         successCallBack:(response) =>{
        //             getMusicIdListCallBack(response.data)
        //         }
        //     }))
        //
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlay);

