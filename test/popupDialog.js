import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	Modal,
	TouchableHighlight,
} from 'react-native';
import CheckboxList from './checkBoxList'
class popupDialog extends Component {
	_car = "";
	constructor(props) {
	  super(props);
	  this.state={
	  	modalVisible: false,
		  car: ''
	  }
	}

	componentDidMount() {

	}


	setModalVisible(visible){
		this.setState({
			modalVisible: visible
		})
	}


	render() {

		return (
			<View style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
				<Modal
					animationType={"fade"}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert("Modal has been closed.")}}
				>
					<View style={styles.modalBackground}>
						<View style={styles.subView}>
							<Text style={styles.modalTitle}>请选择车辆</Text>
							<View style={styles.horizontalLine}/>
							<View>
								<CheckboxList
									options={[
                                        '京A 123456',
                                        '京A 324355',
                                        '京A 988900',
                                        '京A 676878',
                                    ]}
									selectedOptions={['京A 123456']}
									maxSelectedOptions={1}
									onSelection={(option)=>


									{
                                        // alert(option + ' was selected!')
										this._car = option
										// this.setState({
										// 	car: option
										// })
									}
									}
								/>
							</View>
							<View style={styles.buttonView}>
								<TouchableHighlight underlayColor='transparent'
													style={styles.buttonStyle}
													onPress={()=>{this.setModalVisible(!this.state.modalVisible)}}>
									<Text style={styles.buttonText}>
										取消
									</Text>
								</TouchableHighlight>
								<View style={styles.verticalLine} />
								<TouchableHighlight underlayColor='transparent'
													style={styles.buttonStyle}
													onPress={()=>{alert(this._car)}}>
									<Text style={styles.buttonText}>
										确定
									</Text>
								</TouchableHighlight>
							</View>
						</View>

					</View>
				</Modal>

				<TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
					<Text>Show Modal</Text>
				</TouchableHighlight>

			</View>
		)
	}
}

const styles =StyleSheet.create({
	container: {
		flex: 1,
		justifyContent:'center',
		padding:20
	},
	modalBackground:{
		flex:1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems:'center',
		justifyContent:'center'
	},
    subView:{
        marginLeft:45,
        marginRight:45,
        backgroundColor:'#ffffff',
        alignSelf: 'stretch',
        justifyContent:'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor:'#ccc',
    },
	modalTitle:{
		fontSize: 17,
		color: "#333333",
		marginTop: 25,
		marginBottom: 20,
		alignSelf:'center'
	},
    // 水平的分割线
    horizontalLine:{
        height:1,
        backgroundColor:'#ccc',
    },
    // 按钮
    buttonView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle:{
        flex:1,
        height:44,
        alignItems: 'center',
        justifyContent:'center',
    },
    // 竖直的分割线
    verticalLine:{
        width:1,
        height:44,
        backgroundColor:'#d9d9d9',
    },
    buttonText:{
        fontSize:17,
        color:'#008BCA',
        textAlign:'center',
    },
})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(popupDialog);

