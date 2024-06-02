import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native';

const Layout1 = () => {
  return (
    <View style={styles.container1}>
        <View style={styles.box1}>
          <Text style={styles.text1}>
            Hello , Devs
          </Text>
          <Text style={styles.text2}>
            14 tasks today
          </Text>
        </View>
        <View style={styles.box2}>
          <Image
          source={require('./pics/Screenshot1.png')}
          style={{ objectFit: 'cover', width: 50, height: 50, borderRadius: 25,}}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    box1: {
        backgroundColor: '#f7f0e8',
        width: 250,
        height: 90,
        justifyContent: 'center'
      },
      box2: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text1: {
        fontWeight: '700',
        fontSize: 35,
        fontFamily: 'Lato-Bold'
      },
      text2: {
        fontFamily: 'Lato-Bold',
      },
  });

export default Layout1
