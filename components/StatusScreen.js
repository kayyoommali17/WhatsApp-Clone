import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

export default function Status() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.mainCon}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image
              style={styles.ImgCon}
              source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/status.png')}
            />
            <Text style={styles.txtStyle1}>{'My status'}</Text>
            <Text style={styles.txtStyle2}>{'Tap to add status update'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.txtStyle3}>{'Viewed updates'} </Text>

        <View>
          <View style={styles.mainCon}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                style={styles.ImgCon}
                source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/status.png')}
              />
              <Text style={styles.txtStyle1}>{'Satyam Appinventiv'}</Text>
              <Text style={styles.txtStyle2}>{'Tap to add status update'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainCon}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                style={styles.ImgCon}
                source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/status.png')}
              />
              <Text style={styles.txtStyle1}>{'Puspha Appinventiv'}</Text>
              <Text style={styles.txtStyle2}>{'Tap to add status update'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainCon}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                style={styles.ImgCon}
                source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/status.png')}
              />
              <Text style={styles.txtStyle1}>{'Masroor Ali'}</Text>
              <Text style={styles.txtStyle2}>{'Tap to add status update'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.txtStyle3}>{'Muted updates'} </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomIcon}>
        <TouchableOpacity onPress={toggleModal} style={{padding: 13}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/pencil.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 6}}>
          <Image
            style={styles.bottomImg}
            source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/PhotoCam.png')}
          />
        </TouchableOpacity>
      </View>

      {/*...............................Modal Start Here ....................*/}

      <Modal isVisible={isModalVisible} deviceWidth={1}>
        
        <View style={styles.ModalStyl}>

          <View>
            <TextInput
              placeholder="Type a Status"
              autoFocus={true}
              style={{fontSize: 40}}
            />
          </View>
        

          <Button title="Go Back" onPress={toggleModal} />
        </View>
      </Modal>

      {/*.................................Modal End  Here..............................*/}
    </View>
  );
}
const styles = StyleSheet.create({
  mainCon: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 12,
  },
  ImgCon: {
    height: 65,
    width: 65,
  },
  txtStyle1: {
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 12,
  },
  txtStyle2: {
    marginVertical: 29,

    position: 'absolute',
    left: 75,
  },
  txtStyle3: {
    fontSize: 15,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  bottomIcon: {
    position: 'absolute',
    right: 20,
    bottom: 70,
  },
  bottomImg: {
    height: 40,
    width: 40,
  },
  ModalStyl: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  StatusIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  position:'absolute',
  left:15,
  marginTop:30
  },
  StatusImgStyl: {
    height: 30,
    width: 30,
    
  },
});
