import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

export 
const stylesPLS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight ? Constants.statusBarHeight : 10,
    backgroundColor: 'black',
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
    fontFamily: 'Montserrat',
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
  map: {
    marginTop: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.9,
    marginLeft: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.5,
  }
});