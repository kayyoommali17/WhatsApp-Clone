import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const img = () => {
    return (
        <View style ={{marginTop:100}}>
            <Text onPress={()=>{
                ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true
                  }).then(image => {
                    console.log(image);
                  }).catch((err) =>console.log("Err", err))
            }}>img</Text>
            
        </View>
    )
}

export default img

const styles = StyleSheet.create({})