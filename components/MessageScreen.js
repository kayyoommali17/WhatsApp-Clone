import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';

export default function MessageScreen({route, navigation}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: route.params.img,
        },
        
      }
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerCon}>
        <TouchableOpacity onPress={() => navigation.navigate('My Tabs')}>
          <Image
            style={styles.Imgstyl}
            source={require('../assets/fonts/arrow.png')}
          />
        </TouchableOpacity>
        {/* {console.log("imggggggg",route.params.img)} */}

        <View style={styles.InnrCon}>
         <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Image
            style={styles.ProfilePicstyl}
            source={{uri: route.params.img}}
          />
          </TouchableOpacity>

          <Text style={styles.Txtstyl}>{route.params.name}</Text>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
       

        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'blue',
                },
                left: {
                  backgroundColor: '#dcf8c6',
                },
              }}
            />
          );
        }}
        renderInputToolbar={props => {
          return (
            <InputToolbar
              {...props}
              containerStyle={{borderRadius:30,marginHorizontal:10}}
            />
          );
        }}
        scrollToBottom={true}
        infiniteScroll={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  UpperCon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerCon: {
    flex: 0.14,
    backgroundColor: '#075E54',
    // flexWrap: 'wrap',
    flexDirection: 'row',
  },
  Imgstyl: {
    height: 20,
    width: 20,
    marginTop: 50,
    left: 10,
  },
  InnrCon: {
    flexDirection: 'row',
    marginTop: 40,
    left: 20,
  },
  ProfilePicstyl: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  Txtstyl: {
    fontSize: 19,
    fontWeight: '600',
    color: 'white',
    top: 9,
    marginLeft: 10,
  },
});
