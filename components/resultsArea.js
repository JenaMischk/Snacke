import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView,
          Button, Linking, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';

import {stylesPLS} from './styles.js'

export default function ResultsArea({ route, navigation }) {

const equipas = [
  {
    id: "1",
    name: "Batatum",
    tempo: '42m',
    pontos: 650
  },
  {
    id: "2",
    name: "Ratos do Campo",
    tempo: '49m',
    pontos: 500
  },
  {
    id: "3",
    name: "Pastéis de Belém",
    tempo: '55m',
    pontos: 350
  }
];

  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

        <View style={stylesPLS.fakeSpacer}/>

         <Text style={stylesPLS.bigTextStyle}>
          Classificação Final
         </Text>

        <View style={stylesPLS.fakeSpacer}/>
        <View style={stylesPLS.fakeSpacer}/>

        <View>
         {equipas.map((equipa) => {
           return (
           <View>
            <Text style={stylesPLS.textStyle}>{equipa.id}: {equipa.name} - {equipa.tempo} - {equipa.pontos}€</Text>
           </View>
           );
         })}
        </View>

        <View style={stylesPLS.fakeSpacer}/>
        <View style={stylesPLS.fakeSpacer}/>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={stylesPLS.narrowTextStyle}>
            Descobre as últimas novidades no nosso website e ganha um desconto de 10% em qualquer Escape Room
          </Text>
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://missiontoescape.com/')}}>
            <Image
              style={stylesPLS.destinationImage}
              source={{
                uri: 'https://missiontoescape.com/wp-content/uploads/2021/07/whatsapp-image-2021-06-30-at-3.21.08-pm-1536x1536.jpeg',
              }}
            />
          </TouchableOpacity>
        </View>
    
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
