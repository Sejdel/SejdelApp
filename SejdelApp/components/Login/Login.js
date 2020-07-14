import React, { Component } from 'react';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
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
  StatusBar,
  Linking,
  TouchableWithoutFeedback
} from 'react-native';

export default class LoginView extends Component {

    state = {
      email   : '',
      password: '',
    }

    onClickListener = (viewId, navigate) => {
      navigate(viewId);
    }

    login = () => {
      fetch('https://sejdel.nu/api/auth/signin/', {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => response.text())
      .then((json) => {
        if(json == "OK"){
          this.props.navigation.push('MainMenu', this.props.navigation);
        }else {
          console.log(json)
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
                textContentType="emailAddress"
                onChangeText={(email) => this.setState({email})}/>
          </View>
          
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../../assets/icons/lock.png')}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                placeholderTextColor = "#FFFFFF"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                textContentType="password"
                onChangeText={(password) => this.setState({password})}/>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.resetPW]} onPress={() => this.onClickListener('restore_password', navigate)}>
              <Text style={styles.resetPWText}>Supit bort ditt lösenord?</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.login()} underlayColor="rgba(255, 167, 38, 0.4)">
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>


          <TouchableHighlight style={[styles.buttonContainer, styles.register]} onPress={() => this.onClickListener('Register', navigate)} underlayColor="rgba(255, 255, 255, 0.4)">
              <Text style={styles.registerText}>Register</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.buttonContainer, styles.register]} onPress={() => this.onClickListener('MainMenu', navigate)} underlayColor="rgba(255, 255, 255, 0.4)">
              <Text style={styles.registerText}>Main Menu</Text>
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
      alignItems:'center',
      color: '#FFFFFF',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      color: '#FFFFFF',
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
    backgroundColor: "rgba(255, 167, 38, 0.9)",
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