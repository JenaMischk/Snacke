import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';

import {stylesPLS} from './styles.js'

export default function GameArea({ route, navigation }) {

  const [currentChallenge, setCurrentChallenge] = useState(0);
  const challengeList = [
    {
      destinationName: 'Torre de Belém',
      destinationCoords: {
        lat: 38.69172603907667,
        lng: -9.216052404054627
      },
      destinationImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Torre_Bel%C3%A9m_April_2009-4a.jpg/1200px-Torre_Bel%C3%A9m_April_2009-4a.jpg',
      password: 'oihvn98e9092nc24987',
      hasChallenge: true
    },
    {
      destinationName: 'Padrão dos Descobrimentos',
      destinationCoords: {
        lat: 38.693714513536754,
        lng: -9.20566858686739
      },
      destinationImage: 'https://lisbonlisboaportugal.com/images/400pxbelem/padrao-descobrimentos-lisbon.jpg',
      password: 'oihvn98e9092nc24987',
      hasChallenge: false
    },
    {
      destinationName: 'Castelo de S. Jorge',
      destinationCoords: {
        lat: 38.71401800876978,
        lng: -9.133476202207603
      },
      destinationImage: 'https://cms.infoportugal.info/media/fotos/final/Lisboa/LSB3282.jpg',
      password: 'oihvn98e9092nc24987',
      hasChallenge: false
    },
  ];

  React.useEffect(() => {
    if (route.params?.success == true) {
      if(currentChallenge != challengeList.length - 1) {
          setCurrentChallenge(currentChallenge + 1)
      } else {

                navigation.replace('EndArea');

              }
          
      route.params.success = false;
    }
  }, [route.params?.success]);


  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

          <View style={stylesPLS.fakeSpacer}/>

          <Text style={stylesPLS.mediumTextStyle}>
            Próximo destino
          </Text>

          <View style={stylesPLS.fakeSpacer}/>


          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={stylesPLS.destinationImage}
              source={{
                uri: challengeList[currentChallenge].destinationImage,
              }}
            />
          </View>

          <View style={stylesPLS.fakeSpacer}/>

          <Text style={stylesPLS.mediumTextStyle}>
            {challengeList[currentChallenge].destinationName}
          </Text>

          <View style={stylesPLS.fakeSpacer}/>
          <View style={stylesPLS.fakeSpacer}/>

          <Text> </Text>

          <Pressable
            style={stylesPLS.button}
            onPress={() => navigation.navigate('ScanArea', {
              hasChallenge: challengeList[currentChallenge].hasChallenge,
              
            })
            }>
            <Text style={stylesPLS.buttonTextStyle}>
              Confirmar chegada
            </Text>
          </Pressable>

          <Text> </Text>

          <Pressable
            style={stylesPLS.button}
            onPress={() => navigation.navigate('HintArea', {
              destinationCoords: challengeList[currentChallenge].destinationCoords,
              destinationName: challengeList[currentChallenge].destinationName
            })}
          >
            <Text style={stylesPLS.buttonTextStyle}>
              Obter dica
            </Text>
          </Pressable>


        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}