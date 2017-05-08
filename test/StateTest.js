/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
export default class StateTest extends Component{
    constructor(props){
        super(props);
        this.state={
            size:80,
        }
    }
    render(){
        return(
        <View>
            <Text onPress={()=>{
                this.setState({
                    size:this.state.size + 10,
                })
            }}>吹气球</Text>
            <Image
                style={{width:this.state.size,height:this.state.size}}
                source={require('../qiqiu.png')}
            />
        </View>

        )
    }
}


