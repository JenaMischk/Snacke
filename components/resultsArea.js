import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';

import {stylesPLS} from './styles.js'

export default function ResultsArea({ route, navigation }) {

const equipas = [
  {
    id: "1",
    name: "Batatum",
  },
  {
    id: "2",
    name: "Ratos do Campo",
  },
  {
    id: "3",
    name: "Pastéis de Belém",
  }
];

  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

         <Text style={stylesPLS.bigTextStyle}>
          Classificação Final
         </Text>

       <View style={stylesPLS.fakeSpacer}/>
       <View style={stylesPLS.fakeSpacer}/>

        <View>
         {equipas.map((equipa) => {
           return (
           <View>
            <Text style={stylesPLS.textStyle}>{equipa.id}: {equipa.name}</Text>
           </View>
           );
         })}
        </View>
    
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}