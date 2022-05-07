import React from 'react';
import { KeyboardAvoidingView, Platform, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import * as Realm from "realm-web";

import Home from './components/home.js';
import WaitingArea from './components/waitingArea.js';
import GameArea from './components/gameArea.js';
import HintArea from './components/hintArea.js';
import ScanArea from './components/scanArea.js';

function LogoTitle() {
  return (
    <View /*style={{flex: 1, alignItems: 'center'}}*/>
      <Image
        style={{ width: 100, height: 50, marginTop: 10 }}
        source={require('./assets/mte-logo.png')}
      />
    </View>
  );
}

export default function App() {

  const Stack = createNativeStackNavigator();

  /*const app = new Realm.App({ id: 'mte-peddypaper-mkkrj' });
  const credentials = Realm.Credentials.anonymous();
  const user = app.logIn(credentials);
  console.log(app.currentUser, user);*/
 
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: (props) => <LogoTitle {...props}/> 
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
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}