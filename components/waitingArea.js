import React, { useState, useContext } from 'react';
import AppContext from './appContext';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';

import {stylesPLS} from './styles.js'

import { Card } from 'react-native-paper';

export default function WaitingArea({ navigation }) {

  const globals = useContext(AppContext);
  const stylesPLS = globals.darkTheme ? globals.styles.darkStyle : globals.styles.lightStyle;

  return (


    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

          <View style={stylesPLS.fakeSpacer}/>

          <Text style={stylesPLS.textStyle}>
            Por favor aguarda pelo início do jogo
          </Text>

          <View style={stylesPLS.fakeSpacer}/>
          <View style={stylesPLS.fakeSpacer}/>
 
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