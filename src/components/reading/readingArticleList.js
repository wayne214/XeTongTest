import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
	ListView
} from 'react-native';
import ReadingArticleItem from '../../components/reading/readingArticleItem'
class readingArticleList extends Component {
	constructor(props) {
	  super(props);
	  let dataSource = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
	  this.state={
          dataSource: dataSource
	  }
	}
	componentDidMount() {
		const {articleList} = this.props;
		console.log('articleList',articleList)
		// InteractionManager.runAfterInteractions(this.fetchData)
		if (articleList){
			this.setState({
				dataSource:this.state.dataSource.cloneWithRows(articleList)
			})
		}
	}
    //在iOS平台下
    //react-native-scrollable-tab-view嵌套react-native-viewpager
    //react-native-viewpager再嵌套ListView的情况下, 必须得加removeClippedSubviews={false}
    //否则ViewPager表现不正常 ,原因至今未明
	render() {
		return <ListView
			removeClippedSubviews={false}
			style={styles.listView}
			dataSource={this.state.dataSource}
			renderRow={this.renderRow.bind(this)}
			showsVerticalScrollIndicator={false}
		/>
	}
	renderRow(data){
		return (
            <ReadingArticleItem data={data}/>
		)
	}
}

readingArticleList.propTypes = {
    articleList: PropTypes.array,

    year: PropTypes.number,
    month: PropTypes.number,
    index: PropTypes.number
};

const styles =StyleSheet.create({
	listView: {
		flex: 1,
	}
})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(readingArticleList);

