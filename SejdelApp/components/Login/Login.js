import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  TouchableHighlight,
  Image,
  Alert,
  StatusBar
} from 'react-native';

export default class LoginView extends Component {

    state = {
      email   : '',
      password: '',
    }
    
    onClickListener = (viewId, navigate) => {
      navigate(viewId);
    }
    
    render() {
      const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../../assets/pics/beer1.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar hidden />
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../../assets/icons/email.png')}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                placeholderTextColor = "#FFFFFF"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>
          
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../../assets/icons/lock.png')}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                placeholderTextColor = "#FFFFFF"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.resetPW]} onPress={() => this.onClickListener('restore_password', navigate)}>
              <Text style={styles.resetPWText}>Supit bort ditt lösenord?</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('MainMenu', navigate)}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>


          <TouchableHighlight style={[styles.buttonContainer, styles.register]} onPress={() => this.onClickListener('register', navigate)}>
              <Text style={styles.registerText}>Register</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomWidth: 1,      
      borderBottomColor: '#FFFFFF',
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    marginTop:70,
    backgroundColor: "rgba(0, 181, 236, 0.7)",
  },
  loginText: {
    color: 'white',
  },
  resetPW: {
    width:250,
    height:45,
    marginBottom:40,
    marginTop:-20,
    flexDirection: 'row',
    alignItems:'center'
  },
  resetPWText: {
    color: '#FFFFFF'
  }, 
  register: {
    width:250,
    height:45,
    marginTop:-20,
    flexDirection: 'row',
    alignItems:'center'
  },
  registerText: {
    color: '#FFFFFF'
  },
});