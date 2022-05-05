import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './components/WhatsAppheader';
import MyTabs from './components/TabviewNavBar';
import Contacts from './components/ContactlistData';
import Chats from './components/ChatScreen';
import ContactHeader from './components/ContactlistHeader';
import SplashScreen from './components/SplashScreen';
import ProfileScreen from './components/ProfileScreen';
import MessageScreen from './components/MessageScreen';
import Settings from './components/Settings';




const Stack = createNativeStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name="My Tabs" component={MyTabs} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="ContactHeader" component={ContactHeader} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
