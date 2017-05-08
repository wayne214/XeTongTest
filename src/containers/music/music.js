import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	InteractionManager
} from 'react-native';
import NavigationBar from '../../common/navigationBar'
import center from '../../../assets/img/individual_center.png'
import search from '../../../assets/img/search_min.png'
import ViewPager from 'react-native-viewpager';
import MusicDetailPage  from '../../components/music/musicDetailPage'
import * as API from '../../constants/api'

import {getMusicIdList} from '../../actions/music'
class Music extends Component {
	constructor(props) {
	  super(props);
        this.state = {
            dataSource: new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2,
            }),
        };

        this.fetchDate = this.fetchDate.bind(this)
		this._getMusicIdListCallBack = this._getMusicIdListCallBack.bind(this)
        this._renderPage = this._renderPage.bind(this)
	}

	fetchDate(getMusicIdListCallBack){
		this.props.getMusicIdList({},getMusicIdListCallBack)
	}

    _getMusicIdListCallBack(result){
		this.setState({
			dataSource:this.state.dataSource.cloneWithPages(result)
        })
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(this.fetchDate(this._getMusicIdListCallBack))
	}

	render() {
		const {navigator} = this.props;
		return (
			<View style={styles.container}>
				<NavigationBar
					style={{backgroundColor:'pink'}}
					title={'音乐'}
					navigator={ navigator }
					hiddenBackIcon={true}
					leftButtonConfig={{type:'image',image: center}}
					rightButtonConfig={{type:'image',image: search}}
				/>
				<View style={{flexDirection:'row',flex: 1}}>
					<ViewPager
						style={{flex: 1}}
						dataSource={this.state.dataSource}
						renderPage={this._renderPage}
						renderPageIndicator={false}
					/>
				</View>

			</View>
		)
	}

    _renderPage(data,pageID){
        return (
			<MusicDetailPage id={data}/>
        )
    }

}

const styles =StyleSheet.create({
	container:{
		flex: 1
	}
})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMusicIdList:(params,getMusicIdListCallBack) => {
			dispatch(getMusicIdList({
				url:API.API_MUSIC_ID_LIST,
                successCallBack:(response) =>{
                    getMusicIdListCallBack(response.data)
                }
			}))

	}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);

