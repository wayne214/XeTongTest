/**
 * Created by lipeiwei on 16/10/17.
 */

import React, {PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    PixelRatio
} from 'react-native';
import * as StaticColor from '../constants/staticColor';

const borderWidth = 1 / PixelRatio.get();

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderTopColor: StaticColor.GRAY_BORDER_COLOR,
        borderBottomColor: StaticColor.GRAY_BORDER_COLOR
    },
    touchableOpacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: StaticColor.TEXT_GRAY_COLOR,
    },
    splitView: {
        backgroundColor: StaticColor.GRAY_BORDER_COLOR,
        width: borderWidth,
        marginVertical: 10
    },
    image: {
        width: 40,
        height: 40,
    }
});

class BottomInfo extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {praiseNum, commentNum, shareNum, onPraisePressed, onCommentPressed, onSharePressed} = this.props;
        return (
            <View style={styles.container}>
                {this.renderTouchableOpacityView(praiseNum, require('../../assets/img/laud.png'), onPraisePressed)}
                <View style={styles.splitView}/>
                {this.renderTouchableOpacityView(commentNum, require('../../assets/img/comment_image.png'), onCommentPressed)}
                <View style={styles.splitView}/>
                {this.renderTouchableOpacityView(shareNum, require('../../assets/img/share_image.png'), onSharePressed)}
            </View>
        );
    }

    renderTouchableOpacityView(num, imageSource, onPress) {
        return (
            <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.image} resizeMode="contain" source={imageSource}/>
                    <Text style={styles.text}>{num}</Text>
                </View>
            </TouchableOpacity>
        );
    }


}

export default BottomInfo;