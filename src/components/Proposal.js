import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import SennaEntry from './common/SennaEntry'
//import StackNavigation from 'react-navigation'

class Proposal extends Component {
  static navigationOptions = {
    title: 'Senna - Ajudando você a realizar seu sonho',
  }

   ComponentWillMount () {
    console.log(1)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainView} >
        <SennaEntry style={{flex: 1}} myTime={1} text='Analisando seu perfil e seus desejos nos temos a seguinte proposta de financiamento para você'></SennaEntry>
        <Text style={styles.geral}>Modelo do carro: Honda Civic</Text>
        <Text style={styles.geral}>Ano do carro: 2015</Text>
        <Text style={styles.geral}>Preço Total: R$ 80000</Text>
        <Text style={styles.geral}>Valor de entrada: R$ 20000</Text>
        <Text style={styles.geral}>Número de parcelas: 72 parcelas</Text>
        <Text style={styles.geral}>Preço da parcela: R$ 694</Text>
        <View style={styles.sla}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Recusar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSucess.bind(this)} style={styles.button}>
            <Text style={{color: 'white'}}>Aceitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  goToSucess () {
    this.props.navigation.navigate('Sucess')
  }
}

const screenWidth = Dimensions.get('window').width

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  geral: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 8,
    fontSize: 20,
  },
  sla: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#6563A4',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25
  }
})

export default Proposal;
