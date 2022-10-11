import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text,View,StyleSheet } from 'react-native';
import HomeScreen from './component/home';
import WorkScreen from './component/work';


const stack = createNativeStackNavigator();


export default App = ()=>{
  return (
    <NavigationContainer  >
      <stack.Navigator /*initialRouteName='Home'*/ screenOptions={{headerShown:false}}>
        <stack.Screen
          name = 'Home'
          component={HomeScreen}
        />
        <stack.Screen
          name = 'Work'
          component = {WorkScreen}
        />
      </stack.Navigator>
    </NavigationContainer>  
  )
}
