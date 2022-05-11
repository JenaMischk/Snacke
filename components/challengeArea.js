import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';

import {stylesPLS} from './styles.js'

export default function ChallengeArea({ route, navigation }) {

const [awnser, setAwnser] = useState('');
const [nomeBotao, setBotao] = useState('Confirmar');

  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

         <Text style={stylesPLS.bigTextStyle}>
            Desafio!
          </Text>
          
        <View style={stylesPLS.fakeSpacer}/>

          <Text style={stylesPLS.textStyle}>
              Qual é a terceira palavra na inscrição presente na placa de informação junto ao QR Code?
          </Text>

          <View style={stylesPLS.loginDiv}>
            <TextInput
              value={awnser}
              onChangeText={(res) => setAwnser(res)}
              placeholder={'Resposta'}
              style={stylesPLS.input}
            />
          </View>

           <Pressable
            style={stylesPLS.button}
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
            <Text style={stylesPLS.buttonTextStyle}>
              {nomeBotao}
            </Text>
          </Pressable>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}