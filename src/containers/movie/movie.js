import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	ListView,
		Dimensions,
} from 'react-native';
import GiftedListView from '../../common/giftedListView'
import * as API from '../../constants/api';
import {getMovieList} from '../../actions/movie';
import MovieListItem from '../../components/movie/movieListItem';


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    itemContainer: {

    },
    separatorView: {
        height: 10,
        backgroundColor: 'white',
        width: windowWidth,
        alignItems: 'center'
    }
});
class Movie extends Component {
	constructor(props) {
	  super(props);
      this.lastOneId = 0;
      this.state = {
          refreshing: false,
          hasMore: true,
          movieList: []
      };
      this.renderRow = this.renderRow.bind(this);
      this.fetchData = this.fetchData.bind(this);
      this.fetchMoreData = this.fetchMoreData.bind(this);
      this.fetchLatestData = this.fetchLatestData.bind(this);
      this._getMovieListCallBack = this._getMovieListCallBack.bind(this);
      this._loadMoreMovieListCallBack = this._loadMoreMovieListCallBack.bind(this);
	}
    //该接口传0代表加载最新的
    fetchLatestData() {
        this.setState({
            refreshing: true
        });
        // this.fetchData(0).then(movieList => {
        //     this.setState({
        //         movieList,
        //         hasMore: movieList.length != 0,
        //         refreshing: false
        //     });
        // });
    }
    //加载更多
    fetchMoreData(loadMoreMovieListCallBack) {
        // this.props.getMovieList({id: this.lastOneId},loadMoreMovieListCallBack);

        // this.fetchData(this.lastOneId).then(newMovieList => {
        //     let movieList = this.state.movieList.concat(newMovieList);//push只能传元素.concat才能传数组
        //     this.setState({
        //         movieList,
        //         hasMore: newMovieList.length != 0
        //     });
        // });
    }
    fetchData(id,getMovieListCallBack) {
        this.props.getMovieList({id: id},getMovieListCallBack);
    }
    _getMovieListCallBack(movieList){
		console.log('movieList',movieList);
				if (movieList && movieList.length > 0) {
            this.lastOneId = movieList[movieList.length - 1].id;// 记录下来
						this.setState({
                movieList: movieList
						})
				} else {
						this.lastOneId = -1;
				}
		}
    _loadMoreMovieListCallBack(newMovieList){
        console.log('movieList',movieList);
        let movieList = this.state.movieList.concat(newMovieList);//push只能传元素.concat才能传数组
				this.setState({
						movieList,
						hasMore: newMovieList.length !== 0,
				});
    }
    renderRow(movieData, sectionID, rowID) {
    	console.log('movieData',movieData);
        return (
					<MovieListItem rowID={rowID} cover={movieData.cover} title={movieData.title} onPress={() => this.onPress(movieData)}/>
        );
    }

    onPress(movieData) {
        // getNavigator().push({
        //     name: 'MovieDetailPage',
        //     simpleMovieData: movieData
        // });
    }

    renderSeparator(sectionID, rowID) {
        return (
					<View key={rowID} style={styles.separatorView}/>
        );
    }
	componentDidMount() {
			this.fetchData(0, this._getMovieListCallBack);
	}
	render() {
      //pageSize代表一个event loop绘制多少个row
      let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.state.movieList);
      return (
				<GiftedListView
					initialListSize={20}
					pageSize={20}
					refreshing={this.state.refreshing}
					hasMore={this.state.hasMore}
					fetchLatestData={this.fetchLatestData}
					fetchMoreData={this.fetchMoreData(this._getMovieListCallBack)}
					dataSource={dataSource}
					renderRow={this.renderRow}
					renderSeparator={this.renderSeparator}
				/>
      );
	}
}

const mapStateToProps = (state) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMovieList: (params, getMovieListSuccessCallBack) => {
			dispatch(getMovieList({
					url:API.API_MOVIE_LIST + params.id,
          successCallBack: (response) => {
              getMovieListSuccessCallBack(response.data)
					}
			}))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

