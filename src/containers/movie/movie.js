import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	StyleSheet,
    Dimensions,
    Image,
    Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import NavigationBar from '../../common/navigationBar'


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    itemContainer: {

    },
    dot: {
        width: 6,
        height: 6,
        backgroundColor: 'white',
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
    },
    activeDot: {
        width: 6,
        height: 6,
        backgroundColor: '#008BCA',
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
    },
});
class Movie extends Component {
	constructor(props) {
	  super(props);
      this.images = [
          '淘宝头条',
          '新浪头条',
          '京东头条',
      ];
	}
	componentDidMount() {
	}
    renderView() {
        // const imageViews = [];
        // for (let i = 0; i < this.images.length; i++) {
        //     console.log('jioo',this.images[i]);
        //     imageViews.push(
        //         <Text key={i} style={{fontSize: 30, color: 'gray'}}>{this.images[i]}</Text>,
        //     );
        // }
        // return imageViews;

        const data = this.images.map((item, index) => {
            console.log('index', index);
            return(<Text key={index} style={{fontSize: 30, color: index === 0 ? 'blue' : index === 1 ? 'red' : 'green'}}>{item}</Text>)
        });

        return data;
    }
	render() {
      const {navigator} = this.props;
      return (
          <View style={{flex: 1}}>
              <NavigationBar
                  style={{backgroundColor: '#3f7fff'}}
                  title={'电影'}
                  navigator={ navigator }
                  leftButtonHidden={true}
              />
              <Swiper
                  horizontal={false}
                  height={50}
                  width={width}
                  paginationStyle={{bottom: 5}}
                  autoplay={true}
                  dot={
                      <View style={styles.dot}/>
                  }
                  activeDot={
                      <View style={styles.activeDot}/>
                  }
              >
                  {this.renderView()}
              </Swiper>
          </View>
      );
	}
}

const mapStateToProps = (state) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

