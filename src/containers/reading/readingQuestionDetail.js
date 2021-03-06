import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import NavigationBar from '../../common/navigationBar'
class readingQuestionDetail extends Component {
	constructor(props) {
	  super(props);
	}
	componentDidMount() {

	}
	render() {
        const {navigator} = this.props;
		return <View style={styles.container}>
			<NavigationBar
				title={'问答'}
				navigator={ navigator }
				hiddenBackIcon={false}
			/>
			<Text>问答详情页</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(readingQuestionDetail);

