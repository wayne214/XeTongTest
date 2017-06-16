import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Mine extends Component {
	constructor(props) {
	  super(props);
	}
	componentDidMount() {

	}
	render() {
		return <View style={styles.container}>
			<Text>Welcome</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mine);

