import React, { Component} from 'react';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
import url from 'url';
import * as Linking from 'expo-linking';

import {
    View, 
    Text, 
    StyleSheet,  
    ImageBackground,
    StatusBar,
    TouchableHighlight,
    Image
} from 'react-native';

/*
Endpoints som behövs: hämta saldo från DB, uppdatera en betalning
*/

export default class MainMenu extends Component {

  state={
    owed:1
  }

  componentDidMount() {
    this._setCurrentDebt();
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }
  _setCurrentDebt() {
    console.log("GETTING DEBT");
  }

  getData() {
    
    let datajson = {
      "version":1,
      "payee":{
      "value":"+46706888887"
      },
      "amount":{
      "value":this.state.owed
      },
      "message":{
      "value":"What the fuck did you just fucking say about me, y",
      "editable":true
      }
    }
    
    return datajson;
  }
  

  launchSwish = () => {
    AppInstalledChecker
    .checkURLScheme('swish') // omit the :// suffix
    .then((isInstalled) => {
      const serialized = encodeURIComponent(JSON.stringify(this.getData()))
      const callbackurl="exp://192.168.1.20:19000" //Finns ingen API-endpoint ännu? sejdel:// när publicerad
      const url = "swish://payment?data="+serialized+"&callbackurl="+callbackurl+"&callbackresultparameter=res";
      
      var res = Linking.openURL(url).then(res => {
        console.log(decodeURIComponent(res));
      })
    })
    
  }

  getDebt() {
    return this.state.owed;
  }
  
  onClickListener = (viewId, navigate) => {
    navigate(viewId);
  }

  _handleOpenURL(event) {
    let res = Linking.parse(event.url)
    jsonRes = JSON.parse(res.queryParams.res)
    console.log(jsonRes);
  }

  render(){
      return(
          <ImageBackground source={require('../../assets/pics/beer4.jpg')} style={{width: '100%', height: '100%'}}>
          <StatusBar hidden />
          
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <Image style={styles.profileIcon} source={require('../../assets/icons/account.png')}/>
              <Text style={styles.debtText}>CURRENT MOTHERFUCKIN' DEBT: {this.getDebt()}</Text>
            </View>
            
            <TouchableHighlight 
            style={[styles.buttonContainer, styles.register]} 
            onPress={() => this.launchSwish()}
            underlayColor="rgba(255, 167, 38, 0.4)"
            >
              <Text style={styles.registerText}>Swish</Text>
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
    profileIcon:{
      height: 60,
      width: 60,
      justifyContent: 'center'
    },
    debtText: {
      color: 'white',
      marginTop: 10,
    },
    profileContainer: {
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      marginTop: 20,
    },
    register: {
      backgroundColor:'#ffa726'
    }
});
