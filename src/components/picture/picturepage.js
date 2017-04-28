import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
	View,
	StyleSheet,
	Image,
	Text,
	ScrollView,
    TouchableOpacity,
    InteractionManager
} from 'react-native';
import * as StaticColor from '../../constants/staticColor'
import diary from '../../../assets/img/diary.png'
import share from '../../../assets/img/share_image.png'
import laud from '../../../assets/img/laud.png'
import * as API from '../../constants/api'
import Http from '../../utils/http'
_pictureId = 1
import {getPictureDetail} from '../../actions/picture'
class picturepage extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
		this._getPictureDetailCallBack = this._getPictureDetailCallBack.bind(this);
		this.state={
			data:{}
		}
    }


	fetchData(getPictureDetailCallBack){
		const {id} = this.props;
		this.props.getPictureDetail({pageId:id},getPictureDetailCallBack)
	}

    _getPictureDetailCallBack(result){
		console.log('detaillll',result)
		this.setState({
			data:result
		})
	}
    componentDidMount() {
        InteractionManager.runAfterInteractions(this.fetchData(this._getPictureDetailCallBack))
    }

    render() {
		var data = this.state.data != null ? this.state.data : {};
        return (
			<ScrollView style={styles.scrollView}>
				<View>
					<View style={styles.topViewContainer}>
						<TouchableOpacity onPress={ ()=>{
                            this.onImagePress()
						}} activeOpacity={1}>
							<Image style={styles.contentImage} source={{uri:data.hp_img_url}}/>
						</TouchableOpacity>
						<View style={styles.pictureInfoContainer}>
							<Text style={styles.pictureInfoText}>{data.hp_title}</Text>
							<Text style={styles.pictureInfoText}>{data.hp_author}</Text>
						</View>
						<Text style={styles.content}>{data.hp_content}</Text>
						<Text style={styles.date}>{data.hp_makettime}</Text>
					</View>
					<View style={styles.bottomViewContainer}>
						{this.renderTouchableBlock(diary,'小记',this.toEditDiary)}
						<View style={{flexDirection:'row',alignItems:'center'}}>
							{this.renderTouchableBlock(laud,'10',this.praise)}
							<TouchableOpacity style={styles.shareImage} activeOpacity={0} onPress={this.sharePicture}>
								<Image style={styles.smallIcon} resizeMode='contain' source={share}/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
        )
    }

    renderTouchableBlock(imageSource, text, onPress) {
        return (
			<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center',}} activeOpacity={1} onPress={onPress}>
				<Image style={styles.smallIcon} source={imageSource}/>
				<Text style={styles.bottomText}>{text}</Text>
			</TouchableOpacity>
        )
    }
	//打开日记
    toEditDiary(){
		alert('编辑日记')
	}
	//分享
	sharePicture(){
		alert('分享')
	}
	//点击图片
	onImagePress(uri){
		alert('查看图片')
	}
	//点赞or取消点赞
	praise(){
		alert('你赞了')
	}


}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPictureDetail:(params,getPictureDetailCallBack) => {
            dispatch(getPictureDetail({
                url:API.API_PICTURE_DETAIL+params.pageId,
                successCallBack:(response)=>{
                    console.log('responseDeatail',response.data)
                    getPictureDetailCallBack(response.data)
                },
                failCallBack:(err)=>{

                }
            }))
        }
    }
}

const styles = StyleSheet.create({
	scrollView:{
		flex: 1,
		padding: 10
	},
    topViewContainer:{
		borderWidth: 1,
		borderColor: StaticColor.GRAY_BORDER_COLOR,
		padding: 10
	},
	contentImage:{
		height: 250,
	},
    pictureInfoContainer:{
		flexDirection:'row',
		justifyContent: 'space-between'
	},
	pictureInfoText:{
		fontSize: 12,
		color: StaticColor.TEXT_GRAY_COLOR
	},
	content:{
		marginTop: 20,
		fontSize: 15,
		color: StaticColor.TEXT_COLOR
	},
	date:{
		marginTop: 30,
		fontSize: 14,
		color:StaticColor.TEXT_GRAY_COLOR,
		alignSelf: 'flex-end'
	},
	bottomViewContainer:{
		flexDirection: 'row',
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	smallIcon:{
		width: 45,
		height: 45,
	},
	bottomText:{
		fontSize: 14,
		color: StaticColor.TEXT_GRAY_COLOR,
	},
	shareImage:{
		marginLeft: 10
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(picturepage);