import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function ReturnViewOfLongPress() {
  const [headerVisible, setHeaderVisible] = useState(false);
  function LongPressHeader() {
    console.log('Indside LongPress');
    setHeaderVisible(!headerVisible);
  }
  return (
    <View style={{flex: 1}}>
      {headerVisible && <Header/>}
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Example of onLongPress on TouchableOpacity in React Native
        </Text>
        <TouchableOpacity
          onLongPress={LongPressHeader}
          // onPress={handlerClick}
          //Here is the trick
          activeOpacity={0.6}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>LONG PRESS THE BUTTON</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Header = () => {
  return (
    <View style={styles.UpprCon}>
      <View
        style={{
          flexDirection: 'row',
          width: '20%',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}>
          <TouchableOpacity>
        <Image
          style={styles.imgstyl}
          source={require('./assets/fonts/arrow.png')}
        />
        </TouchableOpacity>
        <Text style={styles.TxtStyl}>{'1'}</Text>
      </View>
      <View style={styles.InnerCon}>
      <TouchableOpacity>
        <Image
          style={styles.imgstyl}
          source={require('./assets/images/Pin.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.imgstyl}
          source={require('./assets/images/delete.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.imgstyl}
          source={require('./assets/images/mute.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.imgstyl}
          source={require('./assets/images/Archive.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.imgstyl}
          source={require('./assets/fonts/menu.png')}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export {Header};
const styles = StyleSheet.create({
  UpprCon: {
    backgroundColor: '#075E54',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '11%',
    paddingTop: 50,
  },
  imgstyl: {
    height: 30,
    width: 30,
  },
  TxtStyl: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  InnerCon: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonStyle: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#EE5407',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 16,
  },
});
