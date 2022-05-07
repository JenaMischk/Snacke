import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function WaitingArea({ navigation }) {

  return (


    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={styles.scrollView}>

          <View style={styles.fakeSpacer}/>

          <Text style={styles.textStyle}>
            Por favor aguarda pelo início do jogo
          </Text>

          <View style={styles.fakeSpacer}/>
          <View style={styles.fakeSpacer}/>
 
          <CountDown
            until={10}
            onFinish={() => {navigation.replace('GameArea')} }
            onPress={() => {navigation.replace('GameArea')} }
            size={20}
            //digitStyle={{backgroundColor: '#FFF'}}
            //digitTxtStyle={{color: '#1CC625'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'm', s: 's'}}
            timeLabelStyle={{color: 'white', fontWeight: 'bold'}}
            //showSeparator
            //separatorStyle={{color: 'white'}}
          />


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
    marginHorizontal: '30%',
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
  },
});
