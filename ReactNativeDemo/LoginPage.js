
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

var HomePage = require('./HomePage.js');

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
       phoneNumber : "0"
    }
    this.onNextPress = this.onNextPress.bind(this);
  }

  _navigate(name,phoneNumber,type='Normal'){
    this.props.navigator.push({
      component: HomePage,
      passProps: {
        name: name,
        phoneNumber: phoneNumber
      },
      type: type
    })
  }

  onNextPress = () => {
     this._navigate('首页',this.state.phoneNumber);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}> 
    			<Text style={styles.headText}>登录</Text>
    		</View>
        <View style={styles.phonePreView}>
          <Text style={styles.phonePreText}>+86</Text>
          <TextInput onChangeText={
            (text) => {
              this.state.phoneNumber = text;
            }} 
          style={styles.tiPhone} 
          placeholder="请输入手机号" />
        </View>
        <View style={styles.line} />
        <TextInput style={styles.tiPwd} placeholder="请输入6-16位密码" />
        <View style={styles.line} />
      
        <TouchableOpacity onPress={this.onNextPress}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginText}>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
     color:'white',
     fontSize:18,
  },
  loginBtn: {
    marginTop:80,
    marginLeft:20,
    marginRight:20,
    borderColor: '#ff8447',
    borderRadius: 22, 
    alignItems:'center',
    justifyContent: 'center', 
    backgroundColor:'#1FCAD3',
    height:44,
  },
  tiPwd: {
    marginLeft:20, 
    width:200,
    height:44,
    fontSize:16,
    color:'#444444'
  },
  line: {
    height:1, 
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#CCCCCC'
  },
  tiPhone: {
      width:200,
      height:44,
      fontSize:16,
      color:'#444444'
  },
  phonePreView: {
    flexDirection:'row',
    height:44
  },
  phonePreText: {
    color:'#444444', 
    marginLeft:20,
    marginRight:20,
    marginTop:15, 
    textAlign:'center',
    alignItems:'center'
  },
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		marginTop: 20,
	},
	heading:{
		height: 44,
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

module.exports = LoginPage



