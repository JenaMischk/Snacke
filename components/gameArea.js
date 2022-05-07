import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';


export default function GameArea({ navigation }) {

  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challengeList = [
    {
      destinationName: 'Torre de Belém',
      destinationCoords: {
        lat: 38.69172603907667,
        lng: -9.216052404054627
      },
      destinationImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Torre_Bel%C3%A9m_April_2009-4a.jpg/1200px-Torre_Bel%C3%A9m_April_2009-4a.jpg',
      password: 'oihvn98e9092nc24987'
    },
    {
      destinationName: 'Padrão dos Descobrimentos',
      destinationCoords: {
        lat: 38.693714513536754,
        lng: -9.20566858686739
      },
      destinationImage: 'https://lisbonlisboaportugal.com/images/400pxbelem/padrao-descobrimentos-lisbon.jpg',
      password: 'oihvn98e9092nc24987'
    },
    {
      destinationName: 'Castelo de S. Jorge',
      destinationCoords: {
        lat: 38.71401800876978,
        lng: -9.133476202207603
      },
      destinationImage: 'https://cms.infoportugal.info/media/fotos/final/Lisboa/LSB3282.jpg',
      password: 'oihvn98e9092nc24987'
    },
  ];


  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={styles.scrollView}>

          <View style={styles.fakeSpacer}/>

          <Text style={styles.mediumTextStyle}>
            Próximo destino
          </Text>

          <View style={styles.fakeSpacer}/>


          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={styles.destinationImage}
              source={{
                uri: challengeList[currentChallenge].destinationImage,
              }}
            />
          </View>

          <Text style={styles.mediumTextStyle}>
            {challengeList[currentChallenge].destinationName}
          </Text>

          <View style={styles.fakeSpacer}/>
          <View style={styles.fakeSpacer}/>

          <Pressable
            style={styles.button}
            //onPress={() => navigation.navigate('WaitingArea')}
            onPress={() => {
              if(currentChallenge != challengeList.length - 1) {
                setCurrentChallenge(currentChallenge + 1)
              }
            }}>
            <Text style={styles.buttonTextStyle}>
              Avançar
            </Text>
          </Pressable>

          <Text> </Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('ScanArea')}
            >
            <Text style={styles.buttonTextStyle}>
              Confirmar chegada
            </Text>
          </Pressable>

          <Text> </Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HintArea', {
              destinationCoords: challengeList[currentChallenge].destinationCoords,
              destinationName: challengeList[currentChallenge].destinationName
            })}
          >
            <Text style={styles.buttonTextStyle}>
              Obter dica
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
  },
});
