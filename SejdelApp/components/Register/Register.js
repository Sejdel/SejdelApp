import React, { Component} from 'react';
import { Input, Button } from 'react-native-elements';
import {
    ImageBackground,
    Image,
    StyleSheet,
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
        console.log("YESSSSS INLOGGAD");
        this.props.navigation.push('Login', this.props.navigation);
        }else {
        console.log(json)
        this.setState({password: ""});

        }
    })
    .catch((error) => {
        console.error(error);
        this.setState({password: ""});
    });
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require('../../assets/pics/beer4.jpg')} style={{width: '100%', height: '100%'}}>
                <Input 
                    onChangeText={(firstName) => this.setState({firstName})}
                    placeholder="Alko"
                    required
                    label="First name"
                />
                <Input 
                    onChangeText={(lastName) => this.setState({lastName})}
                    placeholder="Holist"
                    label="Last name"
                />
                <Input 
                    onChangeText={(email) => this.setState({email})}
                    placeholder="email@address.com"
                    keyboardType='email-address'
                    label="Email"
                    leftIcon={
                        <Image style={styles.inputIcon} source={require('../../assets/icons/email.png')}/>
                    }
                />
                <Input 
                    onChangeText={(password) => this.setState({password})}
                    placeholder="Password"
                    secureTextEntry={true} 
                    label="Password"
                    leftIcon={
                        <Image style={styles.inputIcon} source={require('../../assets/icons/lock.png')}/>
                    }
                />
                <Input 
                    onChangeText={(phoneNbr) => this.setState({phoneNbr})}
                    placeholder="+46123456789"
                    keyboardType='phone-pad'
                    label="Phone nbr"
                />
                <Button
                    title="Yeet"
                    onPress={() => this.signup(navigate)}
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      }

});