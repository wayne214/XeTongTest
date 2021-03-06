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

//根据需要引入
import {
    SwRefreshScrollView, //支持下拉刷新的ScrollView
    SwRefreshListView, //支持下拉刷新和上拉加载的ListView
    RefreshStatus, //刷新状态 用于自定义下拉刷新视图时使用
    LoadMoreStatus //上拉加载状态 用于自定义上拉加载视图时使用
} from 'react-native-swRefresh'

var {width,height} = Dimensions.get('window');
export default class PulltoReflesh extends Component {
    _page = 0
    _dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: this._dataSource.cloneWithRows([1])
        };
    }


    render() {
        return this._renderListView();
    }

    /**
     * scrollVewDemo
     * @returns {XML}
     */
    _renderScrollView() {

        return (
            <SwRefreshScrollView
                onRefresh={this._onRefresh.bind(this)}
                ref="scrollView"
                //其他你需要设定的属性(包括ScrollView的属性)
            >
                <View style={styles.content}>
                    <Text>下拉刷新ScrollView</Text>
                </View>
            </SwRefreshScrollView>
        )

    }

    /**
     * ListViewDemo
     * @returns {XML}
     * @private
     */
    _renderListView() {
        return (
            <SwRefreshListView
                dataSource={this.state.dataSource}
                ref="listView"
                renderRow={this._renderRow.bind(this)}
                onRefresh={this._onListRefersh.bind(this)}
                onLoadMore={this._onLoadMore.bind(this)}
                //isShowLoadMore={false}
                renderFooter={() => {
                    return
                    (<View style={{backgroundColor: 'blue', height: 30}}>
                        <Text>我是footer</Text>
                    </View>)
                }}

            />
        )


    }

    _renderRow(rowData) {
        return (
            <View style={styles.cell}>
                <Text>{'这是第'+rowData+'行'}</Text>
            </View>)

    }

    /**
     * 模拟刷新
     * @param end
     * @private
     */
    _onRefresh(end){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')

            end()//刷新成功后需要调用end结束刷新

        },1500)

    }

    /**
     * 模拟刷新
     * @param end
     * @private
     */
    _onListRefersh(end){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            this._page=0
            let data = []
            for (let i = 0;i<10;i++){
                data.push(i)
            }
            this.setState({
                dataSource:this._dataSource.cloneWithRows(data)
            })
            this.refs.listView.resetStatus() //重置上拉加载的状态

            end()//刷新成功后需要调用end结束刷新
            // this.refs.listView.endRefresh() //建议使用end() 当然 这个可以在任何地方使用
        },1500)
    }

    /**
     * 模拟加载更多
     * @param end
     * @private
     */
    _onLoadMore(end){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            this._page++
            let data = []
            for (let i = 0;i<(this._page+1)*10;i++){
                data.push(i)
            }
            this.setState({
                dataSource:this._dataSource.cloneWithRows(data)
            })
            //end(this._page > 2)//加载成功后需要调用end结束刷新 假设加载4页后数据全部加载完毕
            this.refs.listView.endLoadMore(this._page > 2)
        },2000)
    }


    componentDidMount() {
        // let timer = setTimeout(()=>{
        //     clearTimeout(timer)
        //     // this.refs.scrollView.beginRefresh()
        //     this.refs.listView.beginRefresh()
        // },100) //自动调用刷新 新增方法
    }

}
const styles = StyleSheet.create({
    container:{

    },
    content:{
        width:width,
        height:height,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

    }
});

