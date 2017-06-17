import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import SennaEntry from './common/SennaEntry'
//import StackNavigation from 'react-navigation'

class Financing extends Component {
  static navigationOptions = {
    title: 'Sua escolha de financiamento',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView}>

        <SennaEntry style={{flex: 1}} myTime={1} text='Escolha abaixo como você deseja prosseguir'></SennaEntry>

        <View style={styles.finantialItem1} >
          <TouchableOpacity
            onPress={this.goToProposal.bind(this)}>
            <View style={styles.text}>
              <Text style={styles.mainText}>Juntei um dinheiro</Text>
              <Text style={styles.subText}>Quero a melhor opção financeira com o dinheiro que tenho juntado</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.finantialItem}>

          <View style={styles.text}>
            <Text style={styles.mainText}>Parcelamento Custo</Text>
            <Text style={styles.subText}>Desejo parcelar meu carro visando o menor custo e benefício a longo prazo</Text>
          </View>
        </View>
        <View style={styles.finantialItem1}>

          <View style={styles.text}>
            <Text style={styles.mainText}>Parcelamento dinheiro</Text>
            <Text style={styles.subText}>Desejo parcelar meu carro visando o menor tempo possível de acordo com minha renda</Text>
          </View>
        </View>
        <View style={styles.finantialItem}>

          <View style={styles.text}>
            <Text style={styles.mainText}>Estou em dúvida, Senna</Text>
            <Text style={styles.subText}>Desejo a melhor solução possível de acordo com minha realidade e sem foco específico</Text>
          </View>
        </View>
      </View>
    );
  }

  goToProposal () {
    this.props.navigation.navigate('Proposal', {user: this.props.user})
  }
}

const screenWidth = Dimensions.get('window').width

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  finantialItem1: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10
  },
  finantialItem: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10
  },
  text: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23
  },
  subText: {
    fontSize: 18
  }
})

export default Financing;
