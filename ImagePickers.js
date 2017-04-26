/**
 * Created by xebest on 2017/3/20.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker'
//配置弹出的信息
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
export default class ImagePickers extends Component{
    constructor(props) {
        super(props);

        this.state={
            avatarSource:null
        }
    }
    componentDidMount(){

    }

    render(){
        return(
            <View style={[styles.container, this.iosMarginTop]}>
                <TouchableHighlight onPress={()=>{
                    ImagePicker.showImagePicker(photoOptions,(response) =>{
                        console.log('response'+response);
                        if (response.didCancel) {
                            console.log('User cancelled image picker')
                        }
                        else if (response.error) {
                            console.log('ImagePickerManager Error: ', response.error);
                        }
                        else if (response.customButton) {
                            // 这是当用户选择customButtons自定义的按钮时，才执行
                            console.log('User tapped custom button: ', response.customButton);
                        }
                        else {
                            // You can display the image using either data:
                            var source = {}
                            if (Platform.OS === 'android') {
                                source = {uri: response.uri, isStatic: true};
                            } else {
                                source = {
                                    uri: response.uri.replace('file://', ''),
                                    isStatic: true
                            };
                            }
                            this.setState({
                                avatarSource:source
                            })
                        }


                    })
                }}>
                <Text style={{fontSize:20,color:'blue'}}>测试</Text>
                </TouchableHighlight>
                <Image
                    style={styles.avatar}
                    source={this.state.avatarSource}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:50,
        backgroundColor: '#F5FCFF',
        alignItems:'center'
    },
    avatar: {
        marginTop:20,
        borderRadius: 75,
        width: 150,
        height: 150
    }
});


