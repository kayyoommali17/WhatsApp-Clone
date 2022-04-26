import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import { details } from './ContactRawDataList';


import ContactHeader from './ContactlistHeader';

export default function Contacts({navigation}) {

  const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: '#fff',flex:1}}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#bbb' : '#ffffff',
            },
          ]}>
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
            <TouchableOpacity activeOpacity={1} style={styles.rightCon}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>{item.name}</Text>

              </View>
              <Text style={styles.textStyle2}>{item.status}</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ContactHeader />
      
      <FlatList
        data={details}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
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
    right: 10,
    position: 'absolute',
  },
});
