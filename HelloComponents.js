/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
/**
 * ES6写法
 * 推荐写法
 */
var name='小明';
var age = '22';
export {name,age}
export default class HelloComponents extends Component{
    static propTypes=({
        name:PropTypes.string,
    })
    render(){
        return(
        <View>
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.age}</Text>
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.sex}</Text>
        </View>

        )
    }
}
export function sum(a,b) {
    return a+b;
}
/**
 * ES5写法
 */
// var HelloComponents = React.createClass({
//     render(){
//         return(
//             <Text style={{fontSize:20,backgroundColor:'blue'}}>Hello</Text>
//         )
//     }
// })
// //ES5,导出组件
// module.exports=HelloComponents;

/**
 * 使用函数式定义一个组件
 * 无状态，不能使用this
 * props访问属性
 */
// function HelloComponents(props) {
//         return <Text style={{fontSize:20,backgroundColor:'yellow'}}>Hello.{props.name}</Text>;
// }
// module.exports= HelloComponents;
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

