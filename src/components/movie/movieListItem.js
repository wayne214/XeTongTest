/**
 * Created by lipeiwei on 16/10/9.
 */

import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: 150,
    backgroundColor: '#65a4ff',
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 100,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomText: {
    color: 'red',
    fontSize: 20,
  },
  bottomImage: {
    height: 20,
    width: 80
  },
});

class MovieListItem extends React.Component {
  constructor() {
    super();
    this.renderBottomText = this.renderBottomText.bind(this);
  }

  render() {
    const {rowID, cover} = this.props;
    return (
      <TouchableOpacity rowID={rowID} onPress={() => this.props.onPress && this.props.onPress()}>
        <View style={{flex: 1}}>
          {/*<Image style={[styles.image, this.props.imageStyle]} resizeMode="cover" source={require('../../../assets/img/score_line.png')}/>*/}
          <View style={styles.image}/>
          {this.renderBottomText()}
        </View>
      </TouchableOpacity>
    );
  }

  renderBottomText() {
    const {title} = this.props;
    if (title) {
      return (
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>{title}</Text>
          <Image resizeMode="cover" style={styles.bottomImage} source={require('../../../assets/img/score_line.png')}/>
        </View>
      );
    } else {
      return null;
    }
  }
}

MovieListItem.PropTypes = {
  rowID: PropTypes.number,
  cover: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};

export default MovieListItem;
