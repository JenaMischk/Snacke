import React from 'react';
import { KeyboardAvoidingView, Platform, Image, Text, View,
  Button, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './components/home.js';
import WaitingArea from './components/waitingArea.js';
import GameArea from './components/gameArea.js';
import HintArea from './components/hintArea.js';
import ScanArea from './components/scanArea.js';
import ChallengeArea from './components/challengeArea.js';
import EndArea from './components/endArea.js';
import ResultsArea from './components/resultsArea.js';

import {stylesPLS} from './components/styles.js'

function LogoTitle() {
  return (
    <View>
      <Image
        style={{ width: 100, height: 50, marginTop: 10 }}
        source={require('./assets/mte-logo.png')}
      />
    </View>
  );
}

function OptionsButton() {
  const navigation = useNavigation();
  const route = useRoute();
  if(route.name != 'Options'){
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Options')} title="Opções">
        <Icon name="bars" size={30} color="white" />
      </TouchableOpacity>
    )
  }
  return (null);
}

function OptionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
      <Button  color = "#ff9201" onPress={() => navigation.goBack()} title="Ver pontuação em tempo real" />
      <Text> </Text>
      <Button color = "#ff9201" onPress={() => navigation.goBack()} title="Alternar modo de dia/noite" />
      <Text> </Text>
      <Button color = "#ff9201" onPress={() => navigation.goBack()} title="Mudar linguagem" />
      <Text> </Text>
      <Button color = "#ff9201" onPress={() => { Linking.openURL('https://wa.me/933090942')}} title="Contactar suporte" />
    </View>
  );
}

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();
 
  return (

    <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: () => <LogoTitle/>,
          headerRight: () => <OptionsButton/>
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="WaitingArea"
            component={WaitingArea}
          />
          <Stack.Screen
            name="GameArea"
            component={GameArea}
          />
          <Stack.Screen
            name="HintArea"
            component={HintArea}
          />
          <Stack.Screen
            name="ScanArea"
            component={ScanArea}
          />
          <Stack.Screen
            name="ChallengeArea"
            component={ChallengeArea}
          />
          <Stack.Screen
            name="EndArea"
            component={EndArea}
          />
          <Stack.Screen
            name="ResultsArea"
            component={ResultsArea}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="Options"
            component={OptionsScreen}
          />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer> 
  );
}