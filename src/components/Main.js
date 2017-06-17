import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import TypeWriter from 'react-native-typewriter'
//import StackNavigation from 'react-navigation'

class Main extends Component {
  static navigationOptions = {
    title: 'Senna - Ajudando você a realizar seu sonho',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView} >
        <Image source={require('../assets/background-splash.png')} style={styles.backgroundImage}>
          <Image source={require('../assets/logo.png')} style={{width: 180, height: 180, marginTop: 35}}>
          </Image>

          <TypeWriter typing={1} minDelay={100} maxDelay={100} style={styles.type}>Olá, sou o Senna :)</TypeWriter>

          <TouchableOpacity
            onPress={() => navigate('Senna')}
            style={styles.startButton}>
              <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center' }}>Começar</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const screenWidth = Dimensions.get('window').width

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    resizeMode: Image.resizeMode.contain
  },
  mainView: {
    flex: 1,
  },
  startButton: {
    flexDirection: 'column',
    height: 50,
    backgroundColor: '#6563A4',
    justifyContent: 'center',
    width: screenWidth,
  },
  type: {
    color: 'white',
    fontSize: 22,
    marginTop: 80,
  }
})

export default Main;
