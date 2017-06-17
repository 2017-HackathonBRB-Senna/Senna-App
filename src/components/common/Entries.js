import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import SennaEntry from './SennaEntry'
import UserEntry from './UserEntry'

class Entries extends Component {
  entriesToShow = this.props.entries.map((entry) => {
    if (entry.type === 'senna') {
      return <SennaEntry text={entry.text}></SennaEntry>
    } else {
      return <UserEntry text={entry.text}></UserEntry>
    }
  })
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.entries}>
          {this.entriesToShow}
        </ScrollView>
      </View>
    );
  }
}


var placeholder = 'me chupa'
inputHeight = 50

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  entries: {
    flex: 2
  },
  inputs: {
    flex: 1,
    maxHeight: inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F1F1F1'
  },
  textInput: {
    flex: 5,
  },
  sendButton: {
    height: 40,
    width: 40
  }
})

export default Entries;
