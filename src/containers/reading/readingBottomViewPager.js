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
    Dimensions,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

import ViewPager from 'react-native-viewpager';

const {width,height} = Dimensions.get('window')

import {getReadingArticleList} from '../../actions/reading'
import * as API from '../../constants/api'
import ReadingArticleList from '../../components/reading/readingArticleList'
class readingBottomViewPager extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource: new ViewPager.DataSource({
                pageHasChanged:(p1, p2) => p1 !== p2
            })
        }

        this.fetchData = this.fetchData.bind(this)
        this._getReadingArticleListCallBack = this._getReadingArticleListCallBack.bind(this)
        this._renderPage = this._renderPage.bind(this)
    }

    fetchData(getReadingArticleListCallBack){
        this.props.getReadingArticleList({},getReadingArticleListCallBack)
    }
    _getReadingArticleListCallBack(result){
        console.log('readingArticleresult',result)
        this.setState({
            dataSource:this.state.dataSource.cloneWithPages(result)
        })
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(this.fetchData(this._getReadingArticleListCallBack))
    }

    render() {
        return (
                <ViewPager
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    renderPageIndicator={false}
                />
        )
    }

    _renderPage(articleList){
        return (
            <ReadingArticleList articleList={articleList}/>
        )
    }

    onPress(data){
        alert(data.title)
    }
}

const styles =StyleSheet.create({
    container: {
        width: width,
    },

})

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReadingArticleList:(params,getReadingArticleListCallBack) =>{
            dispatch(getReadingArticleList({
                url:API.API_READING_ARTICLE_LIST,
                successCallBack:(response) =>{
                    getReadingArticleListCallBack(response.data)
                }

            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(readingBottomViewPager);