/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder
} from 'react-native';
import DatePicker from '../index.js';
export default class DateTimeTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '20:00',
            datetime: '2016-05-05 20:00',
            datetime1: '2016-05-05 20:00',
            showDatePickerDialog:true
        };
        this.picker = null;
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
            onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
            onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
            onPanResponderMove: (e) => console.log('onPanResponderMove'),
            onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
            onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
        });
    }
    _showDatePicker(){
        this.picker.onPressDate();
    }
    render(){
        return(
            <View style={styles.container}
                {...this._panResponder.panHandlers}
            >
                <Text style={{zIndex:3,marginTop:10,position:'relative'}}
                      onPress={()=>{this._showDatePicker()}}>显示日历</Text>
                {
                        this.state.showDatePickerDialog == false ?
                            null:
                            <DatePicker
                                style={{width: 200}}
                                date={this.state.date}
                                mode="date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.setState({date: date});}}
                                ref={(picker)=>{this.picker=picker}}
                            />
                }
                <Text style={styles.instructions}>date: {this.state.date}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

