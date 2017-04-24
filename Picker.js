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
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';
import waithandle from './imgs/waithandle.png'
import  reject from './imgs/reject.png'
import radioButton from './imgs/radiobuttonIcon.png'
import open from './imgs/open.png'
import close from './imgs/close.png'
var {width} = Dimensions.get('window');
export default class Picker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dropdownSelection: '待处理',
            showRadioIcon: false,
            isOpen:false
        }
        this.MenuContext = null;
    }

    render(){
        return(
        <View style={{flexDirection:'row',alignItems:'center',height:40,justifyContent:'center'}}>
            <MenuContext style={{flex:1}} ref={(MenuContext)=>{this.MenuContext=MenuContext}}>
                <View style={styles.content}>
                    <Menu style={styles.dropdown} onSelect={(value) =>
                        this.setState({ dropdownSelection: value,})}
                    >
                        <MenuTrigger>
                            <View style={styles.container}>
                                <Text style={styles.title}>{this.state.dropdownSelection}</Text>
                                        <Image style={{width:10,height:7,marginLeft: 15}}
                                                source={open}
                                        />
                            </View>
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                                     renderOptionsContainer={(options) =>
                                         <ScrollView>
                                             {options}
                                         </ScrollView>}>
                            <MenuOption value="待处理">
                                <View style={styles.item}>
                                    <Image
                                        style={styles.leftIcon}
                                        source={waithandle}
                                    />
                                    <Text style={styles.contentText}>待处理</Text>
                                    {
                                        "待处理" == this.state.dropdownSelection ? <Image
                                            style={{width:15,height:10,flex:0,alignSelf:'flex-end'}}
                                            source={radioButton}
                                        /> : null
                                    }
                                </View>

                            </MenuOption>
                            <View style={styles.separateLine}/>
                            <MenuOption value="拒绝">
                                <View style={styles.item}>
                                    <Image
                                        style={{width:15,height:15}}
                                        source={reject}
                                    />
                                    <Text style={styles.contentText}>拒绝</Text>
                                    {
                                        "拒绝" == this.state.dropdownSelection ? <Image
                                         style={{width:15,height:10,flex:0,alignSelf:'flex-end'}}
                                         source={radioButton}
                                     /> : null
                                    }
                                </View>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
            </MenuContext>
        </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        // ...Platform.select({
        //     ios: {
        //         height: 64,
        //     },
        //     android: {
        //         height: 50
        //     }
        // }),
        height: 64,
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

