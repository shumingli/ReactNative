
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigate,
  TouchableOpacity,
} from 'react-native';

var Util = require('./util.js');
var TabComponent = require('./tabComponent.js');
var BottomBar = require('./bottomBar.js');

export default class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : '首页',
		}
	}
	_onHomeBtnPress=()=>{
		console.log('首页');
		this.setState({title : '首页'});
	};
	_onFindBtnPress=()=>{
		console.log('发现');
		this.setState({title : '发现'});
	};
	_onAttentionBtnPress=()=>{
		console.log('关注');
		this.setState({title : '关注'});
	};
	_onMyBtnPress=()=>{
		console.log('我的');
		this.setState({title : '我的'});
	};

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent 
						title={this.state.title} />
				</View>
				<BottomBar 
					onHomeBtnPress={this._onHomeBtnPress}  
					onFindBtnPress={this._onFindBtnPress}
					onAttentionBtnPress={this._onAttentionBtnPress}
					onMyBtnPress={this._onMyBtnPress} />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	},
	containerTop: {
		flex: Util.ScreenHeight-74,
		justifyContent: 'flex-start',
		backgroundColor: 'white',  //white
		marginTop: 20,
	},
});

module.exports = MainPage;







