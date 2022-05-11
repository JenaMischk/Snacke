import React, { useState, useContext } from 'react';
import AppContext from './appContext';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions, TouchableOpacity,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';

import {stylesPLS} from './styles.js'

export default function ScanArea({ route, navigation }) {

  const globals = useContext(AppContext);
  const stylesPLS = globals.darkTheme ? globals.styles.darkStyle : globals.styles.lightStyle;

  const { hasChallenge } = route.params;

  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

          <Text style={stylesPLS.textStyle}>
          Encontra o Código QR escondido nesta zona
          </Text>

          {/*pedir permissao automatica?*/}

          <View>
          {/*em vez de image ir buscar imagem da camara em tempo real*/}
           <Image
             style={{ width: Dimensions.get('window').width * 0.6, height: Dimensions.get('window').height * 0.7,              marginTop: 10, marginLeft: Dimensions.get('window').width * 0.2, resizeMode: "contain"}}
            source={require('./../assets/examplePic.jpg')}
           />
          </View>

          {/*se pass do codigo == backend avancar logo
          importar qual e o estado para depois avancar para o seguinte*/}
          
           <Pressable
            style={stylesPLS.button}
             onPress={() => {

               if (hasChallenge == true) {

              navigation.replace('ChallengeArea')

              } else {

                navigation.navigate({
                 name: 'GameArea',
                 params: { success: true },
                 merge: true,
               });
              }}
             }>
            <Text style={stylesPLS.buttonTextStyle}>
              Avançar
            </Text>
          </Pressable>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}