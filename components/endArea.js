import React, { useState, useContext } from 'react';
import AppContext from './appContext';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';

export default function EndArea({ route, navigation }) {

  const globals = useContext(AppContext);
  const stylesPLS = globals.darkTheme ? globals.styles.darkStyle : globals.styles.lightStyle;

  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

         <Text style={stylesPLS.bigTextStyle}>
          Fim do jogo
         </Text>

        <Text style={stylesPLS.mediumTextStyle}>
          Por favor aguarda pelo monitor.
         </Text>

      <View style={stylesPLS.fakeSpacer}/>
      <View style={stylesPLS.fakeSpacer}/>

        <CountDown
            until={10}
            onFinish={() => {navigation.replace('ResultsArea')} }
            onPress={() => {navigation.replace('ResultsArea')} }
            size={20}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'm', s: 's'}}
            timeLabelStyle={{color: 'white', fontWeight: 'bold'}}
          />


        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}