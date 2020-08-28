import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from "./components/Home";
import Commands from "./components/Commands";
import Favorites from "./components/Favorites";
import Details from "./components/Details";
import CreateApp from "./components/CreateApp";
import CreateCommand from "./components/CreateCommand";
import AppIcon from "./components/AppIcon";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Favorites" component={Favorites}/>
        <AppStack.Screen name="Details" component={Details}/>
        <AppStack.Screen name="CreateApp" component={CreateApp}/>
        <AppStack.Screen name="CreateCommand" component={CreateCommand}/>
        <AppStack.Screen name="Commands" component={Commands}/>
        <AppStack.Screen name="AppIcon" component={AppIcon}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
