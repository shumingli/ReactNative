
/*
 * 底部状态栏
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

export default class BottomBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			homeStyle:styles.itemText2,
		}
	}
  render() {
    return (
      <View style={{height:54}}>
      	<View style={styles.barLine} />
        <View style={styles.heading}> 
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={
            	this.props.onHomeBtnPress
            } >
            <Image source={require('image!bottom_home')}></Image>
            <Text style={this.state.homeStyle}> 首页 </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this.props.onFindBtnPress} >
            <Image source={require('image!bottom_show')}></Image>
            <Text style={styles.itemText1}> 发现 </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this.props.onAttentionBtnPress} >
            <Image source={require('image!bottom_attention')}></Image>
            <Text style={styles.itemText1}> 关注 </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this.props.onMyBtnPress} >
            <Image source={require('image!bottom_my')}></Image>
            <Text style={styles.itemText1}> 我的 </Text>
          </TouchableOpacity>
    	</View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
	bottomItem: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	barLine: {
		height:1, 
		backgroundColor:'#CCCCCC'
	},
	heading:{
		height: 54,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
	},
	itemText1: {
		color: '#999999',
		fontSize: 14,
		fontWeight:'bold',
		textAlign: 'center',
	},
	itemText2: {
		color: '#000000',
		fontSize: 14,
		fontWeight:'bold',
		textAlign: 'center',
	},
});

module.exports = BottomBar;



