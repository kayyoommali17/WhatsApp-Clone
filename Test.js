import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

export default function App() {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
  
    if (device == null) return <LoadingView />
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
    }  