/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    Platform,
} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu'
import open from './assets/imgs/open.png'
import close from './assets/imgs/close.png'
import radiobuton from './assets/imgs/radiobuttonIcon.png'
var {width} = Dimensions.get('window');
export default class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
        return (
            <View style={{flex: 1}}>
                <DropdownMenu style={styles.container}
                              arrowImg={close}      //set the arrow icon, default is a triangle
                              checkImage={radiobuton}    //set the icon of the selected item, default is a check mark
                              bgColor={"blue"}                            //the background color of the head, default is grey
                              tintColor={"white"}                        //the text color of the head, default is white
                              data={data}
                              maxHeight={410}                            // the max height of the menu
                              handler={(selection, row) => alert(data[selection][row])}>

                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>
                            Your own view Here
                        </Text>
                    </View>

                </DropdownMenu>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                height: 64,
            },
            android: {
                height: 50
            }
        }),
        // height: 64,
        backgroundColor: '#008dcf',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    content: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 30,
    },
    title:{
        color:'#ffffff',
        fontSize: 18,
    },
    item:{
        flexDirection:'row',
        flex: 1,
        paddingBottom:5,
        paddingTop:5
    },
    contentText: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 10,
    },
    dropdown: {
        width: width,
        padding: 5,
    },
    dropdownOptions: {
        width: width,
        marginTop:64
    },
    separateLine: {
        height: 0.5,
        backgroundColor: '#d9d9d9',
        marginLeft: 10
    },
    leftIcon:{
        width:15,
        height:15
    },
    rightIcon:{
        width:15,
        height:10,
        flex:0,
        alignSelf:'flex-end'
    }
});

