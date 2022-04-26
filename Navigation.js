import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: 'white',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'brown',
          // tabBarHideOnKeyboard:(false)
          tabBarStyle: {backgroundColor: '#D8D2CB'},
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search Screen" component={SearchScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to profile"
      onPress={() => navigation.navigate('Profile', {name: 'David'})}
    />
  );
  r;
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flexDirection: 'row'}}>
    <Text>This is {route.params.name}'s profile</Text>

      <Button title="Search" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const SearchScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>This is Search Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const LoginScreen = ({navigation}) => {
    return (<View>
        <Text> This is Login Screen
            <Button
            title='Sign Up'
            onPress={()=>{
                navigation.navigate('Home')
            }}

            />
        </Text>

    </View>)
}

export default MyStack;
