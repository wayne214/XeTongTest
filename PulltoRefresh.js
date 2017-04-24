/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    ListView
} from 'react-native';


var {width,height} = Dimensions.get('window');

import PullRefreshScrollView from 'react-native-pullrefresh-scrollview'

export default class PulltoReflesh extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({     rowHasChanged: (row1, row2) => row1 != row2}),
            load: false,
            curpage:1,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView renderScrollComponent={(props) => <PullRefreshScrollView onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)} onLoadMore={(PullRefresh)=>this.onLoadMore(PullRefresh)} useLoadMore={1}{...props} />}
                          dataSource={this.state.dataSource}
                          renderRow={this._renderRow.bind(this) }
                />
            </View>
        );
    }

    // 请求网络结束下拉刷新状态
    onRefresh(PullRefresh){
        var _this=this;
        let data = {'curpage':'1'};
        let   url = 'http://192.168.0.85/mobile/index.php?act=mb_push&op=getSPushList';
        var common = NetUtil.commonParamsWithAct('mb_push', 'getSPushList');
        NetUtil.post(url, data, common, function (set) {
            if (set.code == 10000) {
                _this.setState({
                    dataSource: _this.state.dataSource.cloneWithRows( set.datas.pushList),
                    load: true
                });
                PullRefresh.onRefreshEnd();
            } else {
                alert("网络繁忙,请稍后");
            }
        });
    }

    // 请求网络数据将加载更多数据状态改为已加载完成
    onLoadMore(PullRefresh){
    var _this=this;
    var pages=_this.state.curpage+1;
    _this.setState({     curpage:pages        });
    let data = {'curpage':pages};
    let url  = 'http://192.168.0.85/mobile/index.php?act=mb_push&op=getSPushList';
    var common = NetUtil.commonParamsWithAct('mb_push', 'getSPushList');
    NetUtil.post(url, data, common, function (set) {
        if (set.code == 10000) {
            _this.setState({
                dataSource: _this.state.dataSource.cloneWithRows( set.datas.pushList),
                load: true
            });
            PullRefresh.onLoadMoreEnd();
        } else {
            alert("网络繁忙,请稍后");
        }
    });
    }

    _renderRow(rowData,sectionID, rowID) {
        return (
            <View style={styles.itemView}>
                <Text style={styles.itemTime}>{rowData.update_time}</Text>
                <View  style={styles.itemBg}>
                    <Text style={styles.itemInfo}>{rowData.push_content.alert}</Text>
                </View>
            </View>
        );
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var _this=this;
        let data = {'curpage':'1'};
        let url = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
        // var common = NetUtil.commonParamsWithAct('mb_push', 'getSPushList');
        // NetUtil.post(url, data, common, function (set) {
        //     if (set.code == 10000) {
        //         _this.setState({
        //             dataSource: _this.state.dataSource.cloneWithRows( set.datas.pushList),
        //             load: true
        //         });
        //     } else {
        //         alert("网络繁忙,请稍后");
        //     }
        // });
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            });
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:70
    },
    itemView:{
        width:width,
        height:70,
        backgroundColor:'#FFFAF0',
    },
    itemTime:{
        width:width,
        height:40,
        fontSize:18,
        top:10,
        textAlign:'center'
    },
    itemBg:{
        width:width-40,
        height:30,
        backgroundColor:'#007AFF',
        borderRadius:8,
        alignSelf:'center',
    },
    itemInfo:{
        width:width-50,
        height:30,
        left:10,
        backgroundColor:'white',
        padding:7
    },
});

