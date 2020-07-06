import React, { Component} from 'react';
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';

import {
    View, 
    Text, 
    StyleSheet,  
    ImageBackground,
    StatusBar,
    TouchableHighlight,
    Linking,
    Image
} from 'react-native';

export default class MainMenu extends Component {

  state={
    owed:1
  }

  componentDidMount() {
    Linking.getInitialURL().then((ev) => {
      if (ev) {
        this._handleOpenURL(ev);
      }
    }).catch(err => {
        console.warn('An error occurred', err);
    });
    Linking.addEventListener('url', this._handleOpenURL);
  }
  

  datajson = {
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

  launchSwish = () => {
    AppInstalledChecker
    .checkURLScheme('swish') // omit the :// suffix
    .then((isInstalled) => {
      const serialized = encodeURIComponent(JSON.stringify(this.datajson))
      const callbackurl="exp://192.168.0.103:19000" //Finns ingen API-endpoint ännu?
      const url = "swish://payment?data="+serialized+"&callbackurl="+callbackurl+"&callbackresultparameter=res";
      
      var res = Linking.openURL(url).then(res => {
        console.log(decodeURIComponent(res));
      })
    })
    
  }

  onClickListener = (viewId, navigate) => {
    navigate(viewId);
  }

  _handleOpenURL(event) {
    console.log("Inside handle url")
    console.log(decodeURIComponent(event.url));
  }

  render(){
      return(
          <ImageBackground source={require('../../assets/pics/beer4.jpg')} style={{width: '100%', height: '100%'}}>
          <StatusBar hidden />
          
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../../assets/icons/account.png')}/>
              <Text>PROFIL</Text>
            </View>
          </View>

          <TouchableHighlight style={[styles.buttonContainer, styles.register]} onPress={() => this.launchSwish()}>
              <Text style={styles.registerText}>Swish</Text>
          </TouchableHighlight>

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
        height: 30,
        width: 30,
        justifyContent: 'center'
      },
      inputContainer: {
        width:250,
        height:45,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginBottom:20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
});
