import * as React from 'react';
import {Text, View, Image,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Chats from './ChatScreen';
import Calls from './CallScreen';
import Status from './StatusScreen';
import Header from './WhatsAppheader';



function Camera() {
  return (
    <View>
      <Text>{'camera...'}</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
   <View style={{flex:1}}>
     <Header/>
    <Tab.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 14, fontWeight: '800'},
        tabBarStyle: {backgroundColor: '#075E54'},
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
          backgroundColor:'white',
          height:3
        }
      }}
      >
      
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Image
              source={require('/Users/appinventiv/Desktop/WhatsApp/assets/fonts/PhotoCam.png')}
              style={{width: 25, height: 25,resizeMode:'cover'}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ChatScreen"
        component={Chats}
        options={{tabBarLabel: 'CHATS'}}
      />
      <Tab.Screen
        name="StatusScreen"
        component={Status}
        options={{tabBarLabel: 'STATUS'}}
      />
      <Tab.Screen
        name="CallScreen"
        component={Calls}
        options={{tabBarLabel: 'CALLS'}}
      />
    </Tab.Navigator>
    </View>
    
  );
}
