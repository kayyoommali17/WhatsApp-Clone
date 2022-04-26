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



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name="My Tabs" component={MyTabs} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ContactHeader" component={ContactHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
