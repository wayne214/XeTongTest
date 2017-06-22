import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	  View,
	  Text,
	  StyleSheet,
    TouchableHighlight,
		Image,
    Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import CountDownTimer from 'react_native_countdowntimer';


import NavigationBar from '../../common/navigationBar';

// 配置弹出的信息
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
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'orange',
    },
    avatar: {
        marginTop:20,
        borderRadius: 50,
        width: 100,
        height: 100
    }
});

class Mine extends Component {
    constructor(props) {
        super(props);

        this.state={
            avatarSource:null
        }
    }
	componentDidMount() {

	}
	render() {
    const {navigator} = this.props;
		return (
					<View style={styles.container}>
						<NavigationBar
							style={{backgroundColor: 'orange'}}
							title={'个人信息'}
							navigator={ navigator }
							hiddenBackIcon={false}
						/>
						<View style={{alignItems: 'center'}}>
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
                          var source = {};
                          if (Platform.OS === 'android') {
                              source = {uri: response.uri, isStatic: true};
                          } else {
                              source = {
                                  uri: response.uri.replace('file://', ''),
                                  isStatic: true
                              };
                          }
                          console.log('source', source);
                          this.setState({
                              avatarSource:source
                          })
                      }


                  })
              }}>
								<Text style={{fontSize:20,color:'blue'}}>选取照片</Text>
							</TouchableHighlight>
							<Image
								style={styles.avatar}
								source={this.state.avatarSource}
							/>
							<Text>Welcome</Text>
                <CountDownTimer
                    //date={new Date(parseInt(endTime))}
                    date="2017-06-23T00:00:00+00:00"
                    days={{plural: 'Days ',singular: 'day '}}
                    hours=':'
                    mins=':'
                    segs=''

                    // daysStyle={styles.time}
                    // hoursStyle={styles.time}
                    // minsStyle={styles.time}
                    // secsStyle={styles.time}
                    // firstColonStyle={styles.colon}
                    // secondColonStyle={styles.colon}
                />
						</View>


					</View>
				)
	}
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);

