import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Chats from './ChatScreen';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';


export default function ContactHeader() {
  const [visible,setVisble]=useState(false)
   const navigation = useNavigation()

  
  return (
    <View style={styles.upperContainer}>
      <TouchableOpacity  onPress={() => navigation.navigate('My Tabs')}>
        <Image
          style={styles.Arrow}
          source={require('/Users/appinventiv/Desktop/WhatsApp/assets/fonts/arrow.png')}
        />
      </TouchableOpacity>
      <Text style={styles.whatsAppTxt}> {'Selected Contact'} </Text>
      <TouchableOpacity>
        <Image
          style={styles.headerIcon}
          source={require('/Users/appinventiv/Desktop/WhatsApp/assets/fonts/loupe.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setVisble(!visible)} > 
        <Image
          style={styles.headerIconSecond}
          source={require('/Users/appinventiv/Desktop/WhatsApp/assets/fonts/menu.png')}
        />
      </TouchableOpacity>
      <Modal
 
 animationIn='fadeInRight'
 animationOut="fadeOutRight"
 useNativeDriver={true}
 transparent={true}
 isVisible={visible}
 backdropOpacity={0}
 onRequestClose={() => {
   setVisble(!visible);
 }}
 onBackdropPress={()=>setVisble(!visible)}>
 <View style={styles.modalCon}>
   <Text>{'Invite a friend'}</Text>
   <Text>{'Contacts'}</Text>
   <Text>{'Refresh'}</Text>
   <Text>{'Help'}</Text>
 </View>
</Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: '#075E54',
    flexDirection: 'row',
    paddingTop: 50,
    height: '12%',
    justifyContent: 'space-between',
  },
  whatsAppTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  headerIcon: {
    height: 25,
    width: 25,
  },
  headerIconSecond: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 13,
  },
  Arrow: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 14,
  },
  modalCon: {
    backgroundColor: 'white',
    height: '20%',
    marginBottom: 'auto',
    width: '70%',
    marginHorizontal: 180,
    marginTop: 30,
    justifyContent:'space-evenly',
    paddingLeft:10,

  },
});
