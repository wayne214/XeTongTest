import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';
class Music extends Component {
	_car = "";
	constructor(props) {
	  super(props);

	}

	componentDidMount() {

	}

	render() {

		return (
			<View style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
				<Text>音乐</Text>
			</View>
		)
	}
}

const styles =StyleSheet.create({

})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);

