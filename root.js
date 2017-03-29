/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponents,{name,age,sum} from "./HelloComponents"
import LifeCycleComponents from "./LifeCycleComponents"
import RefTest from "./RefTest"
import StateTest from "./StateTest"
import ImageTest from "./ImageTest"
import BannerTest from "./BannerTest"
import SwiperTest from "./SwiperTest"
import RefreshControlTest from "./RefreshControlTest"
export default class Root extends Component {
    constructor(props){
        super(props);
        this.state=({
            result:'',
            size:'',
        })

    }
    render() {
        var params={name:'小王',age:22,sex:'女'}//扩展运算符
        var {name,sex}=params;//解构赋值
        return (
        //     {/*<HelloComponents*/}
        // {/*name={name}*/}
        // {/*sex={sex}*/}
        // {/*/>*/}
        // <Text
        //     onPress={()=>{
        //                 var size=this.refs.ref.getSize();
        //                 this.setState({
        //                     size:size,
        //                 })
        //             }}
        // >获取气球的大小：{this.state.size}</Text>
        // <RefTest
        // ref="ref"
        //     />
        //     <View>
        //         <BannerTest/>
        //     </View>
            <RefreshControlTest/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

