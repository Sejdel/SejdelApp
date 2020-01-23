import {React, Component} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default class App extends Component {

  render() {
  return (
    <ImageBackground source={require('../../assets/pics/beer1.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
          <Text style={{fontFamily: 'Inconsolata', fontSize: 56}}>Kråkans Krog</Text>
      </View>
    </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});
