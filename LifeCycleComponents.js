/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class LifeCycleComponents extends Component{
    constructor(props){
        super(props);
        console.log("------constructor------")
    }
    componentWillMount(){
        console.log("------componentWillMount------")
    }
    componentDidMount(){
        console.log("------componentDidMount------")
    }
    componentWillReceiveProps(nextProps){
        console.log("------componentWillReceiveProps------")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("------shouldComponentUpdate------")
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log("------componentWillUpdate------")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("------componentDidUpdate------")
    }
    componentWillUnmount(){
        console.log("------componentWillUnmount------")
    }
    render(){
        console.log("------render------")
        return(
            <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
        )
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

