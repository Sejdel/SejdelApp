import React, { Component} from 'react';
import {
    View, 
    Text, 
    StyleSheet,  
    ImageBackground,
    StatusBar,
    Image
} from 'react-native';

class MainMenu extends Component {
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
    
});

export default MainMenu;