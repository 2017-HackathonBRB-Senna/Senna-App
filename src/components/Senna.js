import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import SennaEntry from './common/SennaEntry'
import UserEntry from './common/UserEntry'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Senna extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDigitable: true,
      hasFinished: false,
      text: '',
      firstChoiceText: 'Sim',
      secondChoiceText: 'Não',
      user: {
        name: '',
        age: '',
        hasBoughtCar: false,
        income: '',
        savings: '',
        dreamCar: {
          model: '',
          year: '',
          price: '',
          isNew: true
        }
      },
      answers: [
        { text: 'Olá nome. Agora que te conheço, a primeira coisa a fazer é identificar seu perfil de comprador. Vou começar com algumas perguntas, ok?', type: 'senna', myTime: -1 },
        { text: 'Qual a sua idade?', type: 'senna', myTime: 1 },
        { text: 'Coisa boa, na flor da idade!', type: 'senna', myTime: -1 },
        { text: 'Você já comprou algum carro na vida?', type: 'senna', myTime: 1 },
        { text: 'Qual é a em média sua renda mensal(em reais)? Não se preocupe, não iremos contar para ninguém :)', type: 'senna', myTime: 1 },
        { text: 'Vamos passo a passo e com muita consciência decidir como vamos realizar esse seu sonho da compra do seu carro. Primeiramente, digite o valor total(em reais) do seu carro', type: 'senna', myTime: 1 },
        { text: 'Qual é o modelo do seu carro?', type: 'senna', myTime: 1 },
        { text: 'Qual é o ano do seu carro?', type: 'senna', myTime: 1 },
        { text: 'Seu carro é novo ou usado?', type: 'senna', myTime: 1 },
        { text: 'Você tem algum dinheiro guardado? Não tem problema se não tiver juntado', type: 'senna', myTime: 1 },
      ],
      entries: [
        { text: 'Conheço tudo sobre carros e o mundo das finanças e estou aqui para te ajudar. Mas antes de começar, preciso primeiro saber seu nome, como posso te chamar?', type: 'senna', myTime: 1 }
      ],
      position: 0
    }
  }

  static navigationOptions = {
    title: 'Descobrindo o seu perfil'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      //<KeyboardAwareScrollView style={{flex: 1}}>
        <View style={styles.mainView}>
          <ScrollView style={styles.entries}
            ref={ref => this.listView = ref}
            onLayout={event => {
              this.listViewHeight = event.nativeEvent.layout.height
            }}
            onContentSizeChange={(width, height) => {
              this.listView.scrollTo({y: height})
            }}>
            {this.entriesToShow()}
          </ScrollView>
          {this.decisionViews()}
        </View>
      //</KeyboardAwareScrollView>
    );
  }

  decisionViews () {
    if (this.state.isDigitable) {
      return ( 
        <View style={styles.inputs}>
          <TextInput
            ref={input => this.input = input}
            blurOnSubmit={true}
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
          <TouchableOpacity
            onPress={this.sendInfo.bind(this)}
            style={styles.inputs}>
            <Image
              style={styles.sendButton} 
              source={require('../assets/sendButton.png')}/>
          </TouchableOpacity>
        </View>
      )
    } else {
      if (!this.state.hasFinished) {
        return (
          <View style={styles.inputs}>
            <TouchableOpacity
              onPress={this.sentChoiceYes.bind(this)}
              style={styles.choiceButton}>
              <Text style={{color: 'white', fontSize: 35}}>{this.state.firstChoiceText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.sentChoiceNo.bind(this)}
              style={styles.choiceButton}>
              <Text style={{color: 'white', fontSize: 35}}>{this.state.secondChoiceText}</Text>
            </TouchableOpacity>
          </View>
        )

      } else {
        return (
          <View style={styles.inputs}>
            <TouchableOpacity
              onPress={this.finish.bind(this)}
              style={styles.finishButton}>
              <Text style={{color: 'white', fontSize: 35}}>Prosseguir</Text>
            </TouchableOpacity>
          </View>
        )
      }
    }
  }

  sendInfo () {
    if (this.state.text !== ''){
      var newArray = this.state.entries
      newArray.push(
        { text: this.state.text, type: 'user'}
      )
      this.setState({newArray})
      this.input.blur()
      this.setState({text: ''})
      this.answerFunctions[this.state.position]()
    }
  }

  sentChoiceYes () {
    if (this.state.user.age !== '') {
      this.answerFunctions[this.state.position](true)
      this.setState({
        isDigitable: !this.state.isDigitable
      })
    }
  }
  sentChoiceNo () {
    if (this.state.user.age !== '') {
      this.answerFunctions[this.state.position](false)
      this.setState({
        isDigitable: !this.state.isDigitable
      })
    }
  }

  entriesToShow () {
    var array = this.state.entries.map((entry) => {
      if (entry.type === 'senna') {
        return (<SennaEntry myTime={entry.myTime} text={entry.text} />)
      } else {
        return (<UserEntry text={entry.text}/>)
      }
    })

    return array
  }

  setDataForPosition () {
    if (this.state.entries.length = 2) {
      // this.setState({user.name: this.state.text})
    }
  }
  answerFunctions = [
    firstAwnser = () => {
      var user = this.state.user
      user.name = this.state.text
      this.setState({user: user})

      var newArray = this.state.entries
      var answer = this.state.answers[0]
      var answerToSend = {
        text: answer.text.replace('nome', this.state.user.name),
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      let that = this
      this.setState({newArray})
      // this.setTimeout(function () {
      // }, 2000)
      this.input.setNativeProps({keyboardType: 'numeric'})
      answer = this.state.answers[1]
      newArray.push(answer)
      this.setState({newArray})
      this.setState({position: 1})
    },
    secondAnser = () => {
      var user = this.state.user
      user.age = this.state.text
      this.setState({user: user})

      var newArray = this.state.entries
      var answer = this.state.answers[2]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      let that = this
      this.setState({newArray})
      // this.setTimeout(function () {
      // }, 2000)
      this.input.setNativeProps({keyboardType: 'numeric'})
      answer = this.state.answers[3]
      newArray.push(answer)
      this.setState({newArray})
      this.setState({position: 2})
      this.setState({
        isDigitable: !this.state.isDigitable
      })
    },
    thirdAnswer = (boughted) => {
      console.log(boughted)
      var user = this.state.user
      user.hasBoughtCar = boughted
      this.setState({user: user})

      var newArray = this.state.entries
      newArray.push(
        { text: boughted ? 'Sim' : 'Não', type: 'user'}
      )
      this.setState({newArray})
      var newArray = this.state.entries
      var answer = this.state.answers[4]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      let that = this
      this.setState({newArray})

      this.setState({position: 3})
    },
    fourthAnswer = () => {
      var user = this.state.user
      user.income = this.state.text
      this.setState({user: user})

      var newArray = this.state.entries
      var answer = this.state.answers[5]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      this.setState({newArray})
      
      this.setState({position: 4})
    },
    fifthAnswer = () => {
      var user = this.state.user
      user.dreamCar.price = this.state.text
      this.setState({user: user})

      this.input.setNativeProps({keyboardType: 'default'})      

      var newArray = this.state.entries
      var answer = this.state.answers[6]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      this.setState({newArray})
      
      this.setState({position: 5})
    },
    sixfthAnswer = () => {
      var user = this.state.user
      user.dreamCar.model = this.state.text
      this.setState({user: user})

      this.input.setNativeProps({keyboardType: 'numeric'})      

      var newArray = this.state.entries
      var answer = this.state.answers[7]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      this.setState({newArray})
      
      this.setState({position: 6})
    },
    seventhAnswer = () => {
      var user = this.state.user
      user.dreamCar.year = this.state.text
      this.setState({user: user})

      this.input.setNativeProps({keyboardType: 'numeric'})      

      var newArray = this.state.entries
      var answer = this.state.answers[8]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      this.setState({newArray})
      
      this.setState({position: 7})

      var newCar = this.state.firstChoiceText
      newCar = 'Novo'
      var oldCar = this.state.secondChoiceText
      oldCar = 'Usado'

      this.setState(
        {isDigitable: !this.state.isDigitable}
      )
      this.setState(
        {firstChoiceText: newCar}
      )
      this.setState(
        {secondChoiceText: oldCar}
      )
    },
    eigthAnswer = (isNew) => {
      var user = this.state.user
      user.dreamCar.isNew = isNew
      this.setState({user: user})

      var newArray = this.state.entries
      newArray.push(
        { text: isNew ? 'Novo' : 'Usado', type: 'user'}
      )
      this.setState({newArray})
      var newArray = this.state.entries
      var answer = this.state.answers[9]
      var answerToSend = {
        text: answer.text,
        type: answer.type,
        myTime: answer.myTime
      }
      newArray.push(answerToSend)
      let that = this
      this.setState({newArray})

      this.setState({position: 8})
    },
    ninethAnswer = () => {
      var user = this.state.user
      user.savings = this.state.savings
      this.setState({user: user})

      this.setState({
        hasFinished: true
      })

      this.setState({
        isDigitable: false
      })
    }
  ]

  finish () {
    this.props.navigation.navigate('Financing', {user: this.state.user})
  }
}

var placeholder = 'me chupa'
inputHeight = 50
const screenWidth = Dimensions.get('window').width

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
    flexWrap: 'wrap'
  },
  sendButton: {
    height: 40,
    width: 40
  },
  choiceButton: {
    backgroundColor: '#6563A4',
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25
  },
  finishButton: {
    flexDirection: 'column',
    height: inputHeight,
    backgroundColor: '#6563A4',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  }
})

export default Senna;
