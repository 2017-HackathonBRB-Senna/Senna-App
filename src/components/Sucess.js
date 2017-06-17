import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import SennaEntry from './common/SennaEntry'
//import StackNavigation from 'react-navigation'

class Main extends Component {
  static navigationOptions = {
    title: 'Senna - Ajudando você a realizar seu sonho',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView} >
        <SennaEntry myTime={1} text='Parabéns, você conseguiu o financiamento do seu carro :)' style={{flex: 1}}></SennaEntry>
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
    backgroundColor: 'white'
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
