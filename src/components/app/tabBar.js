import React, { Component, PropTypes } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
	View,
	Text,
	Image,
    DeviceEventEmitter,
} from 'react-native';
import styles from '../../../assets/css/main';
import Home from '../../containers/home/home';
import Reading from '../../containers/reading/reading';
import Music from '../../containers/music/music';
import Movie from '../../containers/movie/movie'

// import BadgeViewIcon from '../../../assets/img/message_num_bg.png';

export default class TabBar extends Component {

	constructor(props) {
	  super(props);

	  this.state = {};
	  this._renderContainer.bind = this._renderContainer.bind(this);
	}

	componentDidMount() {
		// console.log('store is ', store.getState());
        // DeviceEventEmitter.addListener('aaaaaa',() => {
        	// alert('alert');
		// });

	}

	_renderBadge(badgeCount) {
		// if (!badgeCount) {
		// 	return null;
		// }
  //   return (
  //     <Image style={ styles.badgeBg } source={ BadgeViewIcon }>
		// 	<Text style={ styles.badgeText }>{ badgeCount }</Text>
  //     </Image>
  //   );
	}

	/**
	 * [_renderContainer description]
	 * 	这种方式耦合性太高，暂定，
	 * 		ExceptionsManager.js:82 Warning: Using Maps as children is not yet fully supported.
	 * 		It is an experimental feature that might be removed.
	 * 		Convert it to a sequence / iterable of keyed ReactElements instead.
	 * 		Check the render method of `View`.
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	_renderContainer(key) {
		switch(key) {
			case 'home':
				return (<Home { ...this.props } />);
			case 'reading':
				return (<Reading { ...this.props } />);
			case 'music':
				return (<Music { ...this.props } />);
			case 'movie':
				return (<Movie { ...this.props } />);
			default:
				return (<Home { ...this.props } />);
		}
	}

	_selectTab(tab) {
		this.props.changeTab(tab);
	}

	render() {
		const { routes, currentTab } = this.props;
		const tabItems = routes.map((item, index) => {
			return (
				<TabNavigator.Item
					key={ index }
					selected={ currentTab === item.get('key') }
					renderIcon={() => <Image style={ styles.tabIcon } source={ item.get('renderIcon') }/>}
					renderSelectedIcon={() => <Image style={ styles.tabIcon } source={ item.get('renderSelectedIcon') }/>}
					title={ item.get('title') }
					renderBadge={()=>this._renderBadge(item.get('badgeCount'))}
					selectedTitleStyle={ styles.selectedTitleStyle }
					onPress={this._selectTab.bind(this, item.get('key'))}>
					<View style={{ flex: 1 }}>
							{ this._renderContainer(item.get('key')) }
					</View>
				</TabNavigator.Item>
			);
		});
		return (
			<TabNavigator style={{ flex: 1 }}>
				{ tabItems }
			</TabNavigator>
		);
	}
}