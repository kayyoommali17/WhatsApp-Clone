import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Settings({navigation,routes,item}) {
  return (
    <View style={styles.UpperCon}>
      <View style={styles.headerCon}>
          <TouchableOpacity onPress={()=>navigation.navigate('My Tabs')}>
        <Image
          style={styles.Backbtn}
          source={require('../assets/fonts/arrow.png')}
        />
        </TouchableOpacity>
        <Text style={styles.Txtstyl}>{'Settings'}</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity >
          <View style={styles.profileViewStyl}>
            <TouchableOpacity  >
              <Image
                style={styles.ProfilePicstyl}
                source={require('../assets/images/profile.png')}
              />
            </TouchableOpacity>
            <View style={styles.ProfileInnrCon}>
              <View>
                <Text style={{fontWeight: '500'}}>{'Kayyoom Ali'}</Text>
                <Text>{"Hey there i'm using WhatsApp.."}</Text>
              </View>

              <TouchableOpacity>
                <Image
                  style={styles.QrCodeStyl}
                  source={require('../assets/images/QrCode.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>


        
        <View style={styles.SettingsbottmStyl}>
          <Image
            style={styles.SettingsIcon}
            source={require('../assets/images/key.png')}
          />
          <View style={styles.ProfileInnrCon}>
              <TouchableOpacity>
            <View>
              <Text style={{fontWeight: '500'}}>{'Account'}</Text>
              <Text>{'Privacy,security,change number'}</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.SettingsbottmStyl}>
          <Image
            style={styles.SettingsIcon}
            source={require('../assets/images/chats.png')}
          />
          <View style={styles.ProfileInnrCon}>
            <View>
                <TouchableOpacity>
              <Text style={{fontWeight: '500'}}>{'Chats'}</Text>
              <Text>{'Theme,wallpaper,chat history'}</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>

        <View style={styles.SettingsbottmStyl}>
          <Image
            style={styles.SettingsIcon}
            source={require('../assets/images/Notification.png')}
          />
          <View style={styles.ProfileInnrCon}>
            <View>
                <TouchableOpacity>
              <Text style={{fontWeight: '500'}}>{'Notifications'}</Text>
              <Text>{'Message,group & call tones'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.SettingsbottmStyl}>
          <Image
            style={styles.SettingsIcon}
            source={require('../assets/images/cloud.png')}
          />
          <View style={styles.ProfileInnrCon}>
            <View>
                <TouchableOpacity>
              <Text style={{fontWeight: '500'}}>{'Storage and data'}</Text>
              <Text>{'Network usage,auto-download'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.SettingsbottmStyl}>
          <Image
            style={styles.SettingsIcon}
            source={require('../assets/images/information.png')}
          />
          <View style={styles.ProfileInnrCon}>
            <View>
                <TouchableOpacity>
              <Text style={{fontWeight: '500'}}>{'Help'}</Text>
              <Text>{'Help center,contact us,privacy policy'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.SettingsbottmStyl}>
          <Image
            style={styles.SettingsIcon}
            source={require('../assets/images/friends.png')}
          />
          <View style={styles.ProfileInnrCon1}>
            <View>
                <TouchableOpacity>
              <Text style={{fontWeight: '500'}}>{'Invite a friends'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.metaLogoStyl}>
          <Text>{'from'}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/images/meta.png')}
            />
            <Text style={styles.Metatxt}>{'Meta'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  UpperCon: {
    flex: 1,
    // backgroundColor: 'red',
  },
  headerCon: {
    flex: 0.1,
    backgroundColor: '#075E54',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  Backbtn: {
    height: 20,
    width: 20,
    marginTop: 44,
  },
  Txtstyl: {
    marginTop: 46,
    paddingHorizontal: 20,
  },
  ProfilePicstyl: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  profileViewStyl: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  QrCodeStyl: {
    height: 25,
    width: 25,
    top: 10,
  },
  ProfileInnrCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '73%',
    bottom: 6,
    marginHorizontal: 10,
  },
  SettingsIcon: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  SettingsbottmStyl: {
    //borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    marginHorizontal: 25,
  },
  ProfileInnrCon1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '73%',
    //bottom: 0,
    marginHorizontal: 10,
  },
  metaLogoStyl: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
  },
  Metatxt: {
    color: 'green',
    marginVertical: 3,
    fontSize: 20,
    marginLeft: 4,
  },
});
