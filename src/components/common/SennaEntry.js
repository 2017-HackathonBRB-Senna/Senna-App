import React, { Component } from 'react'
import TypeWriter from 'react-native-typewriter'
import { Image, View, StyleSheet, Text } from 'react-native'

class SennaEntry extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={require('../../assets/sennhaChat2.png')} style={styles.image}/>
        <TypeWriter minDelay={.5} maxDelay={.5} style={styles.type} typing={this.props.myTime}>
          {this.props.text}
        </TypeWriter>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    // alignItems: 'center',
    flexWrap: 'wrap',
    // flexFlow: 'row wrap',
    margin: 20
  },
  image: {
    width: 70,
    height: 30,
    marginBottom : 5
  },
  type: {
    // marginTop: 20,
    fontSize: 20,
    color: '#8E8E92'
  }
})

export default SennaEntry