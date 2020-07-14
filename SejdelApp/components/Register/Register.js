import React, { Component} from 'react';
import { Input, Button } from 'react-native-elements';
import {
    ImageBackground,
    Image,
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native';
import { View } from 'native-base';

export default class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email   : '',
        password: '',
        phoneNbr: ''
      }

    signup = () => {
    fetch('https://sejdel.nu/api/auth/signup/', {
    method: 'POST',
    headers: {
    'Content-type': 'application/json'
    },
    body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNr: this.state.phoneNbr,
        password: this.state.password
    })
    })
    .then((response) => response.text())
    .then((json) => {
        if(json == "OK"){
        this.props.navigation.push('Login', this.props.navigation);
        }else {
        console.log(json)
        }
    })
    .catch((error) => {
        console.error(error);
    });
    }

    _handleSubmit() {
        for(let key of Object.keys(this.state)){
            let value=this.state[key];
            if(value===''){
                this.thirdTextInput.current.clear();
                alert("Please fill all fields");
                return;
            }
        }
        //this.signup();
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require('../../assets/pics/beer4.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Input 
                            onChangeText={(firstName) => this.setState({firstName})}
                            placeholder="Alko"
                            inputStyle={styles.inputColor}
                            scrollEnabled={true}
                            label="First name"
                            textContentType="name"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            blurOnSubmit={false}
                            leftIcon={
                                <Image style={styles.inputIcon} source={require('../../assets/icons/air-freshener-solid.png')}/>
                            }
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input 
                            onChangeText={(lastName) => this.setState({lastName})}
                            ref={(input) => { this.secondTextInput = input; }}
                            placeholder="Holist"
                            inputStyle={styles.inputColor}
                            label="Last name"
                            textContentType="familyName"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            blurOnSubmit={false}
                            leftIcon={
                                <Image style={styles.inputIcon} source={require('../../assets/icons/republican-solid.png')}/>
                            }
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input 
                            onChangeText={(email) => this.setState({email})}
                            ref={(input) => { this.thirdTextInput = input; }}
                            placeholder="email@address.com"
                            inputStyle={styles.inputColor}
                            keyboardType='email-address'
                            label="Email"
                            textContentType="emailAddress"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                            blurOnSubmit={false}
                            leftIcon={
                                <Image style={styles.inputIcon} source={require('../../assets/icons/email.png')}/>
                            }
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input 
                            onChangeText={(password) => this.setState({password})}
                            ref={(input) => { this.fourthTextInput = input; }}
                            placeholder="Password"
                            inputStyle={styles.inputColor}
                            secureTextEntry={true} 
                            label="Password"
                            textContentType="password"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                            blurOnSubmit={false}
                            leftIcon={
                                <Image style={styles.inputIcon} source={require('../../assets/icons/lock.png')}/>
                            }
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input 
                            onChangeText={(phoneNbr) => this.setState({phoneNbr})}
                            inputStyle={styles.inputColor}
                            ref={(input) => { this.fifthTextInput = input; }}
                            placeholder="+46123456789"
                            keyboardType='phone-pad'
                            label="Phone nbr"
                            textContentType="telephoneNumber"
                            returnKeyType="done"
                            leftIcon={
                                <Image style={styles.inputIcon} source={require('../../assets/icons/phone-alt-solid.png')}/>
                            }
                        />
                    </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this._handleSubmit()} underlayColor="rgba(255, 167, 38, 0.4)">
                    <Text style={styles.loginText}>Yeet</Text>
                </TouchableHighlight>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    inputContainer: {
        width:250,
        height:45,
        marginBottom:40,
        flexDirection: 'row',
        alignItems:'flex-start',
        color: '#FFFFFF',
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
    inputColor: {
        color: 'white'
    },
    labelStyle: {
        color: 'green'
    }
});