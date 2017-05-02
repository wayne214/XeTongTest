import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Movie extends Component {
	constructor(props) {
	  super(props);
	}
	componentDidMount() {

	}
	render() {
		return <View style={styles.container}>
			<Text style={{fontSize:20,color:'blue'}}>电影</Text>
		</View>
	}
}

const styles =StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray'
	}
})

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

