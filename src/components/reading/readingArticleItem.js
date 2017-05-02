import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';
import essayImage from '../../../assets/img/essay_image.png'
import serialImage from '../../../assets/img/serial_image.png'
import questionImage from '../../../assets/img/question_image.png'
import * as StaticColor from '../../constants/staticColor'
class readingArticleItem extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {data} = this.props;
		let title, authorName, content;
		let imageSource;
		if (data.content_id) {
			title = data.hp_title;
			authorName = data.author[0].user_name;
			content = data.guide_word;
            imageSource = essayImage;
		} else if (data.serial_id) {
			title = data.title;
			authorName = data.author.user_name;
			content = data.excerpt;
            imageSource = serialImage;
		} else if (data.question_id) {
			title = data.question_title;
			authorName = data.author_list[0].user_name;
			content = data.answer_content;
            imageSource = questionImage;
		}
		return (
			<TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
				<View>
					<View style={styles.rowContainer}>
						<Text style={styles.titleText}>{title}</Text>
						<Image style={styles.image} resizeMode="contain" source={imageSource}/>
					</View>
					<Text style={styles.text}>{authorName}</Text>
					<Text style={styles.text}>{content}</Text>
				</View>
			</TouchableOpacity>

		)
	}

	onPress(data){
		let name, id;
		if (data.content_id) {
			name: 'ReadingEssayDetail';
			id = data.content_id;
		} else if (data.serial_id) {
			name: 'ReadingSerialDetail';
			id = data.id;
		} else if (data.question_id) {
			name: 'ReadingQuestionDetail';
			id = data.question_id;
		}
	}
}
const styles = StyleSheet.create({
	container:{
		flex: 1
	},
	touchableOpacity:{
		padding: 15,
	},
    rowContainer:{
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	},
    titleText: {
        color: StaticColor.TEXT_COLOR,
        fontSize: 18,
        flex: 1
    },
    text: {
        color: StaticColor.TEXT_GRAY_COLOR,
        fontSize: 14,
        marginTop: 5
    },
    image: {
        height: 25,
        width: 60,
    }
})

export default readingArticleItem