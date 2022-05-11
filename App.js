import React from 'react';
import { KeyboardAvoidingView, Platform, Image, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

import Home from './components/home.js';
import WaitingArea from './components/waitingArea.js';
import GameArea from './components/gameArea.js';
import HintArea from './components/hintArea.js';
import ScanArea from './components/scanArea.js';
import ChallengeArea from './components/challengeArea.js';
import EndArea from './components/endArea.js';
import ResultsArea from './components/resultsArea.js';
import SupportArea from './components/support.js';

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
  const Drawer = createDrawerNavigator();
 
  return (

    <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: (props) => <LogoTitle {...props}/>,
        }}
      >

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
         <Stack.Screen
          name="SupportArea"
          component={SupportArea}
        />

      </Stack.Navigator>
    </NavigationContainer> 
  );
}