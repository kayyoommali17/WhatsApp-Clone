import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function CameraScreen() {
 
 
const  WhatsAppOpenCemera = () => {
    console.log('take photo');
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
  }

  return (
    <View style={styles.profileimgStyl}>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={WhatsAppOpenCemera}>
        <Image
          style={styles.ProfileImgstyl}
          source={require('../assets/fonts/PhotoCam.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileimgStyl: {
    
    alignItems: 'center',
   
    justifyContent:'center',
   
  },
  ProfileImgstyl: {
    height: 190,
    width: 190,
    borderRadius: 190,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
});
