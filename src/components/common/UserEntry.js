import React, { Component } from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

class UserEntry extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.secondView}>
          <Image source={require('../../assets/userChat2.png')} style={styles.image}/>
          <Text style={styles.type}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20
  },
  image: {
    width: 65,
    height: 30,
    marginBottom : 5
  },
  type: {
    fontSize: 20,
    color: '#8E8E92'
  }
})

export default UserEntry
