import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import { details } from './components/ChatsRawDetails';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height: screenHeight,} = Dimensions.get('window')

export default function SearchContact() {
  const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity>
          <View style={styles.itemCon}>
            <View style={styles.imgCon}>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  resizeMethod="resize"
                  source={{uri: item.profilePic}}
                  style={styles.imgStyle}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.rightCon}>
              <View style={{flexDirection: 'row', width: '85%'}}>
                <Text style={styles.textStyle}>{item.name}</Text>

                <Text style={styles.textStyle3}>{item.lastSeen}</Text>
              </View>
              <Text style={styles.textStyle2}>{item.lastmsg}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{backgroundColor: "white",height: screenHeight/5,paddingTop: 30,}}>
        <View style={{backgroundColor: "white",height: screenHeight/15,alignItems:'stretch',flexDirection:'row'}}>
          <Image 
          style={{height:30,width:30,marginTop:14,marginLeft:10}}
          source={require('./assets/fonts/RightArrow.png')}/>
          <TextInput placeholder='Search...'/>
        </View>
        <View style={{backgroundColor: "#00f",height: screenHeight/9, }}></View>
      </View>
    
      <FlatList
        data={details}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginBottom: 60,
  },
  itemCon: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    marginVertical: 13,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  imgCon: {
    width: 50,
    height: 50,
    borderRadius: 80,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  rightCon: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    fontWeight: 'bold',
    paddingHorizontal: 13,
  },
  textStyle2: {
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
  textStyle3: {
    right: 1,
    position: 'absolute',
  },
});
