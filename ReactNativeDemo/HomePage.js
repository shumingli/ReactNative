
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigate,
  TouchableOpacity,
} from 'react-native';

export default class HomePage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.heading}>
					<TouchableOpacity 
						style={styles.navigatorBackItem}
						onPress={()=>{
							this.props.navigator.pop();
						}}>
						<Text style={styles.headText}> {'< 返回'} </Text>
					</TouchableOpacity>
					<View style={styles.navigatorTitleItem}>
						<Text style={styles.headText}>{this.props.name}</Text>
					</View>
					<View style={styles.navigatorSpaceItem} />
				</View>
				<View style={styles.content}>
					<Text style={styles.contentText}>
						{this.props.phoneNumber}
					</Text>
				</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	navigatorSpaceItem: {
		flex:1
	},
	navigatorBackItem: {
		flex:1, 
		alignItems:'flex-start',
		marginLeft:10
	},
	navigatorTitleItem: {
		flex:1,
		alignItems:'center'
	},
	content: {
		marginTop: 50,
		alignItems: 'center',
	},
	contentText: {
		fontSize: 18,
		color: 'red',
	},
	container: {
	    flex: 1,
	    justifyContent: 'flex-start',
	    backgroundColor: 'white',
	    marginTop: 20,
	},
	heading:{
		height: 44,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#333333',
		marginBottom: 10,
	},
	headText: {
		color: '#ffffff',
		fontSize: 22,
	},
});

module.exports = HomePage;

