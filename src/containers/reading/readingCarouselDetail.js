import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	InteractionManager,
	Dimensions,
	Image,
    StatusBar,
} from 'react-native';
import {getReadingImageDetail } from '../../actions/reading'
import * as API from '../../constants/api'
import ReadingCarouselDetailItem from '../../components/reading/readingCarouselDetailItem'
const {width,height} = Dimensions.get('window')

import * as RouteType from '../../constants/routeType'

import NavigationBar from '../../common/navigationBar'
class readingCarouselDetail extends Component {
	constructor(props) {
	  super(props);
	  this.state={
	  	dataSource: new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		}),

		 data: this.props.router.getCurrentRoute().params.readingCarousel
	  }

	  this.renderFooter = this.renderFooter.bind(this)
	  this.fetchData = this.fetchData.bind(this)
	  this._getReadingCarouselDetailCallBack = this._getReadingCarouselDetailCallBack.bind(this)
		this.onPress = this.onPress.bind(this)
	}

	fetchData(getReadingCarouselDetailCallBack){
		this.props.getReadingImageDetail({imageId:this.state.data.id,},getReadingCarouselDetailCallBack)
	}
    _getReadingCarouselDetailCallBack(result){
		this.setState({
			dataSource:this.state.dataSource.cloneWithRows(result)
		})
	}

    componentWillUnmount() {
        //恢复正常
        StatusBar.setBackgroundColor('black');
    }

	componentDidMount() {
        //Android 沉浸式statusBar
        StatusBar.setBackgroundColor(this.state.data.bgcolor);
        InteractionManager.runAfterInteractions(this.fetchData);
		InteractionManager.runAfterInteractions(this.fetchData(this._getReadingCarouselDetailCallBack))
	}

	render() {
        const {navigator} = this.props;
		return (
		<View style={{flex:1}}>
			<NavigationBar
				style={{backgroundColor:this.state.data.bgcolor}}
				title={ this.state.data.title }
				navigator={ navigator }
				hiddenBackIcon={false}/>
			<ListView
				style={{backgroundColor:this.state.data.bgcolor}}
				dataSource={this.state.dataSource}
				renderRow={this.renderRow.bind(this)}
				renderFooter={this.renderFooter}
			/>
		</View>
		)
	}

	renderRow(detailData,sectionID,rowID){
		return (
			<ReadingCarouselDetailItem
				detailData={detailData}
				rowID={parseInt(rowID)}
				onPress={() => this.onPress(detailData)}
			/>
		)
	}

	onPress(detailData){
		let type = detailData.type;
        if (type === '1'){
            this.props.router.redirect(RouteType.READING_ESSAY_DETAIL)
        } else if(type === '2'){
            this.props.router.redirect(RouteType.READING_SERIAL_DETAIL)
        } else if(type === '3'){
            this.props.router.redirect(RouteType.READING_QUESTION_DETAIL)
        }
	}

    renderFooter() {
        const {cover, bottom_text} = this.state.data;
        return (
			<View style={styles.bottomViewContainer}>
				<Text style={[styles.bottomText, {marginVertical: 40}]}>_____________</Text>
				<Text style={styles.bottomText}>{bottom_text}</Text>
				<Image source={{uri: cover}} style={styles.bottomImage}/>
			</View>
        );
    }
}

const styles =StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange'
	},
    bottomViewContainer: {
        alignItems: 'center'
    },
    bottomText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 40,
    },
    bottomImage: {
        width: width,
        height: 150,
        marginTop: 60
    }
})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getReadingImageDetail:(params,getReadingCarouselDetailCallBack) =>{
			dispatch(getReadingImageDetail({
				url:API.API_READING_IMAGE_DETAIL+params.imageId,
                successCallBack:(response) => {
                    getReadingCarouselDetailCallBack(response.data)
				},
                failCallBack:(err) => {

				}
			}))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(readingCarouselDetail);

