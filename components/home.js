import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Home({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (


    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={styles.scrollView}>

          <View style={styles.fakeSpacer}/>
          <View style={styles.fakeSpacer}/>
          <View style={styles.fakeSpacer}/>

          <Text style={styles.textStyle}>
            Bem vindo ao nosso novo desafio
          </Text>

          <Text style={styles.bigTextStyle}>
            Peddy Paper
          </Text>

          <View style={styles.fakeSpacer}/>

          <View style={styles.loginDiv}>
            <TextInput
              value={username}
              onChangeText={(res) => setUsername(res)}
              placeholder={'Utilizador'}
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={(res) => setPassword(res)}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <Pressable
            style={styles.button}
            //onPress={() => navigation.navigate('WaitingArea')}
            onPress={() => navigation.replace('WaitingArea')}>
            <Text style={styles.buttonTextStyle}>
              Login
            </Text>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Bem vindo à demonstração de frontend do software para Peddy Paper da Mission To Escape
              </Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonTextStyle}>
                  Fechar
                </Text>
              </Pressable>
            </View>
          </Modal>

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
