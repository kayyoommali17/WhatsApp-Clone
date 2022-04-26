import React, {useState} from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import {details} from './ChatsRawDetails';


export default function Chats({navigation}) {
  
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.itemCon}>
            <View style={styles.imgCon}>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  resizeMethod="resize"
                  source={{uri: item.profilePic}}
                  style={styles.imgStyle}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.rightCon} >
              <View style={{flexDirection: 'row', width: 320}}>
                <Text style={styles.textStyle}>{item.name}</Text>

                <Text style={styles.textStyle3}>{item.lastSeen}</Text>
              </View>
              <Text style={styles.textStyle2}>{item.lastmsg}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={details}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Contacts')}
        style={{
          position: 'absolute',
          bottom: 50,
          right: 30,
          borderRadius: 30,
        }}>
        <Image
          resizeMode="contain"
          source={require('../assets/fonts/chat.png')}
          style={{height: 60, width: 60}}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginBottom: 60,
  },
  itemCon: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    marginVertical: 13,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  imgCon: {
    width: 50,
    height: 50,
    borderRadius: 80,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  rightCon: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    fontWeight: 'bold',
    paddingHorizontal: 13,
  },
  textStyle2: {
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
  textStyle3: {
    right: 1,
    position: 'absolute',
  },
});
