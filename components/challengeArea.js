import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';


export default function ChallengeArea({ route, navigation }) {

const [awnser, setAwnser] = useState('');
const [nomeBotao, setBotao] = useState('Confirmar');

  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={styles.scrollView}>

         <Text style={styles.bigTextStyle}>
            Desafio!
          </Text>
          
        <View style={styles.fakeSpacer}/>

          <Text style={styles.textStyle}>
              Qual é a terceira palavra na inscrição presente na placa de informação junto ao QR Code?
          </Text>

          <View style={styles.loginDiv}>
            <TextInput
              value={awnser}
              onChangeText={(res) => setAwnser(res)}
              placeholder={'Resposta'}
              style={styles.input}
            />
          </View>

           <Pressable
            style={styles.button}
            onPress={() => { 
              if (awnser == 'Correta'){
            
                navigation.navigate({
                 name: 'GameArea',
                 params: { success: true },
                 merge: true,
               });
            
              } else {

                setBotao ('Tenta outra vez')

              }
            }}>
            <Text style={styles.buttonTextStyle}>
              {nomeBotao}
            </Text>
          </Pressable>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //height: '100%',
    paddingTop: Constants.statusBarHeight ? Constants.statusBarHeight : 10,
    backgroundColor: 'black',
    //padding: 8,
  },
  fakeSpacer:{
    marginTop: '10%',
  },
  destinationImage:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  loginDiv:{
    marginTop: '20%',
    marginBottom: '2%',
    marginHorizontal: '5%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mediumTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  bigTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  modalView: {
    marginTop: '40%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginHorizontal: '20%',
    padding: 10,
    elevation: 2,
    backgroundColor: 'gold',
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'gold',
  },
  buttonTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    backgroundColor: 'white'
  },
  scrollView: {
    //backgroundColor: 'pink',
    //marginHorizontal: 20,
  }
});
