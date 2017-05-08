/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PanResponder
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
export default class DateTimeTest extends Component{
    constructor(props) {
        super(props);

    }
    state = {
        isDateTimePickerVisible: false,
        text:moment(new Date()).format('YYYY-MM-DD')
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
        this.setState({
            text:moment(date).format('YYYY-MM-DD')
        })
    };
    render(){
        return(
            <View style={{ flex: 1 ,marginTop:100}}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>Show TimePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                <Text>时间是：{this.state.text}</Text>
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

