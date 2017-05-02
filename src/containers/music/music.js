import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Music extends Component {
	constructor(props) {
	  super(props);
	}
	componentDidMount() {

	}
	render() {
		return <View style={styles.container}>
			<Text style={{fontSize:20,color:'blue'}}>音乐</Text>
		</View>
	}
}

const styles =StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange'
	}
})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);

