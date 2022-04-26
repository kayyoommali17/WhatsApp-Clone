import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');
export default function Header() {
  const [visible, setVisble] = useState(false);
  const [modalopen, setModalOpen] = useState(false);

  return (
    <View style={styles.upperContainer}>
      <Text style={styles.whatsAppTxt}> {'WhatsApp'} </Text>

      {/*...................Start upper search header on click search Bar Modal............. */}
      <Modal
        visible={modalopen}
        deviceWidth={1}
        onBackdropPress={() => setModalOpen(!modalopen)}
        backdropOpacity={0}
        onRequestClose={() => {
          setModalOpen(false);
        }}>
        <View style={styles.searchHearder}>
          <View style={styles.SearchCon}>
            <TouchableOpacity onPress={() => setModalOpen(!modalopen)}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../assets/fonts/RightArrow.png')}
              />
            </TouchableOpacity>
            <TextInput style={styles.searchBar} placeholder="Search..." />
          </View>
          <View style={{height:height/12, width: width,flexWrap: 'wrap',flexDirection: 'row',}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View style={styles.searchIcons}>
                  <Image
                    style={{height: 12, width: 12}}
                    source={require('../assets/fonts/image.png')}
                  />
                  <Text>{'Photos'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.searchIcons}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../assets/fonts/zoom.png')}
                  />
                  <Text>{'Viedios'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.searchIcons}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../assets/fonts/link.png')}
                  />
                  <Text>{'Links'}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View style={styles.searchIcons}>
                  <Image
                    style={{height: 12, width: 12}}
                    source={require('../assets/fonts/gif.png')}
                  />
                  <Text>{'GIFs'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.searchIcons}>
                  <Image
                    style={{height: 12, width: 12}}
                    source={require('../assets/fonts/headphones.png')}
                  />
                  <Text>{'Audio'}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.searchIcons1}>
                  <Image
                    style={{height: 12, width: 12}}
                    source={require('../assets/fonts/Docs.png')}
                  />
                  <Text>{'Documents'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/*...................End upper search header on click search Bar Modal............. */}

      {/*...................Start Inner search header on click search Bar Modal............. */}

      <TouchableOpacity onPress={() => setModalOpen(!modalopen)}>
        <Image
          style={styles.headerIcon}
          source={require('/Users/appinventiv/Desktop/WhatsApp/assets/fonts/loupe.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setVisble(!visible)}>
        <Image
          style={styles.headerIconSecond}
          source={require('/Users/appinventiv/Desktop/WhatsApp/assets/fonts/menu.png')}
        />
      </TouchableOpacity>
      <Modal
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        useNativeDriver={true}
        transparent={true}
        visible={visible}
        backdropOpacity={0}
        onRequestClose={() => {
          setVisble(!visible);
        }}
        onBackdropPress={() => setVisble(!visible)}>
        <View style={styles.modalCon}>
          <TouchableOpacity>
            <Text>{'New group'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{'New broadcast'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{'Link devices'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{'Starred messages'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{'Payments'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{'Settings'}</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/*...................End Inner search header on click search Bar Modal............. */}
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: '#075E54',
    flexDirection: 'row',
    paddingTop: 50,
    height: '10.5%',
  },
  whatsAppTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    // marginTop:10,
    marginLeft: 28,
  },
  headerIcon: {
    height: 25,
    width: 25,
    //position:'absolute',
    left: 177,
  },
  headerIconSecond: {
    height: 25,
    width: 25,
    //position:'absolute',
    left: 195,
  },
  modalCon: {
    backgroundColor: 'white',
    height: '30%',
    marginBottom: 'auto',
    width: '70%',
    marginHorizontal: 180,
    marginTop: 30,
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  searchHearder: {
    width: width,
    backgroundColor: 'white',
    height: height / 5.7,
    position: 'absolute',
    top: 0,
  },
  SearchCon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 40,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  searchBar: {
    backgroundColor: 'white',
    height: 30,
    width: '91%',
    marginLeft: 10,
  },
  searchIcons: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: 80,
    justifyContent: 'space-evenly',
    borderRadius: 16,
    marginTop: 8,
    alignItems: 'center',
    height: 25,
    marginLeft: 10,
  },
  searchIcons1: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: 120,
    justifyContent: 'space-evenly',
    borderRadius: 16,
    marginTop: 8,
    alignItems: 'center',
    height: 25,
    marginLeft: 10,
  },
});
