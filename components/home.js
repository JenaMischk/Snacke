import React, { useState } from 'react';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

import {stylesPLS} from './styles.js'

export default function Home({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (


    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

          <View style={stylesPLS.fakeSpacer}/>
          <View style={stylesPLS.fakeSpacer}/>
          <View style={stylesPLS.fakeSpacer}/>

          <Text style={stylesPLS.textStyle}>
            Bem vindo ao nosso novo desafio
          </Text>

          <Text style={stylesPLS.bigTextStyle}>
            Peddy Paper
          </Text>

          <View style={stylesPLS.fakeSpacer}/>

          <View style={stylesPLS.loginDiv}>
            <TextInput
              value={username}
              onChangeText={(res) => setUsername(res)}
              placeholder={'Utilizador'}
              style={stylesPLS.input}
            />
            <TextInput
              value={password}
              onChangeText={(res) => setPassword(res)}
              placeholder={'Password'}
              secureTextEntry={true}
              style={stylesPLS.input}
            />
          </View>

          <Pressable
            style={stylesPLS.button}
            onPress={() => navigation.replace('WaitingArea')}>
            <Text style={stylesPLS.buttonTextStyle}>
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
            <View style={stylesPLS.modalView}>
              <Text style={stylesPLS.modalText}>
                Bem vindo à demonstração de frontend do software para Peddy Paper da Mission To Escape
              </Text>
              <Pressable
                style={stylesPLS.modalButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesPLS.buttonTextStyle}>
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