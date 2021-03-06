import React, { useState, useContext } from 'react';
import AppContext from './appContext';
import {  Text, View, StyleSheet, Image, Modal, Alert, Pressable, Dimensions,
          TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import { Card } from 'react-native-paper';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function HintArea({ route, navigation }) {

  const globals = useContext(AppContext);
  const stylesPLS = globals.darkTheme ? globals.styles.darkStyle : globals.styles.lightStyle;

  const { destinationCoords, destinationName } = route.params;

  return (

    <SafeAreaView style={stylesPLS.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView style={stylesPLS.scrollView}>

          <MapView style={stylesPLS.map} 
            initialRegion={{
              latitude: destinationCoords.lat,
              longitude: destinationCoords.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              key={'destination'}
              coordinate={{ latitude : destinationCoords.lat , longitude : destinationCoords.lng }}
              title={destinationName}
            />
          </MapView>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}