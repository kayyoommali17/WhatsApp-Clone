import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('My Tabs');
  }, 1000);
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image
        style={styles.Whatsappimg}
        source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/whatsapp.png')}
      />
      
      <View style={{flexDirection: 'row',position:'absolute',bottom:50}}>
      <Text style={{bottom:30,left:55}}>{'From'}</Text>
        <Image
          style={styles.Metaimg}
          source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/meta.png')}
        />
        <Text style={styles.txtstyl}>{'Meta'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Whatsappimg: {
    height: 80,
    width: 80,
  },
  Metaimg: {
    height: 40,
    width: 40,
  },
  txtstyl:{
      fontSize:20,
      fontWeight:'600',
      top:7,
      color:'green'
     

  }
});
