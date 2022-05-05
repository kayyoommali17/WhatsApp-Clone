import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function ProfileScreen({navigation, route}) {
  
  const [profile, setProfile] = useState(route.params.img);

  return (
    <View style={styles.upperCon}>
      <View style={styles.ProfileheaderStyl}>
        <TouchableOpacity onPress={() => navigation.navigate('My Tabs')}>
          <Image
            style={styles.backBtn}
            source={require('../assets/fonts/arrow.png')}
          />
        </TouchableOpacity>

        <Text style={styles.txtProfStyl}>{'Profile'}</Text>
      </View>
      <View style={styles.profileimgStyl}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            ImagePicker.openPicker({
              width: 200,
              height: 200,
              cropping: true,
            })
              .then(image => {
                setProfile(image.path);
              })

              .catch(err => console.log('Err', err));
          }}>
          <ImageBackground
            style={styles.ProfileImgstyl}
            source={{uri: profile}}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 70}}>
        <View style={{marginBottom: 20}}>
          <TouchableOpacity>
            <View style={styles.InnnerCon3}>
              <Image
                style={styles.staticIcon}
                source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/UserProfile.png')}
              />
              <Image
                style={styles.staticIcon2}
                source={require('../assets/images/Blackpencil.png')}
              />
            </View>

            <View style={styles.txtStyl}>
              <Text>{'Name'}</Text>
              <Text style={styles.dynamicNameStyl}>{route.params.name}</Text>
              <Text style={{marginTop: 8}}>
                {
                  'This is not your username or pin .This name will be visible to your WhatsApp Contacts'
                }
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 20}}>
          <TouchableOpacity>
            <View style={styles.InnnerCon3}>
              <Image
                style={styles.staticIcon}
                source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/info.png')}
              />
              <Image
                style={styles.staticIcon2}
                source={require('../assets/images/Blackpencil.png')}
              />
            </View>

            <View style={styles.txtStyl}>
              <Text style={{fontWeight: '500'}}>{'About'}</Text>
              <Text>{'Hi there i m using WhatasApp'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.InnnerCon3}>
              <Image
                style={styles.staticIcon}
                source={require('/Users/appinventiv/Desktop/WhatsApp/assets/images/callicon.png')}
              />
            </View>

            <View style={styles.txtStyl}>
              <Text style={{fontWeight: '500'}}>{'Phone'}</Text>
              <Text>{'+91 -9876543210'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upperCon: {
    borderRadius: 50,
  },
  ProfileheaderStyl: {
    backgroundColor: '#075E54',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtProfStyl: {
    marginTop: 25,
    marginLeft: 40,
    fontSize: 21,
    fontWeight: '700',
    color: 'white',
  },
  profileimgStyl: {
    alignItems: 'center',
    marginTop: 30,
  },
  PhotoCamStyl: {
    position: 'absolute',
    bottom: 0,
    right: 110,
  },
  photocam: {
    height: 50,
    width: 50,
  },
  InnnerCon: {
    marginTop: 80,
    marginLeft: 40,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  InnnerCon2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  InnnerCon3: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  txtStyl: {
    marginLeft: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 10,
  },
  dynamicNameStyl: {
    marginTop: 3,
    fontWeight: '600',
  },
  backBtn: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginTop: 25,
  },
  ProfileImgstyl: {
    height: 190,
    width: 190,
    borderRadius: 190,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  staticIcon: {
    height: 20,
    width: 20,
  },
  viewbottomstyl: {
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  staticIcon2: {
    height: 20,
    width: 20,
    left: 330,
    bottom: 30,
  },
});
