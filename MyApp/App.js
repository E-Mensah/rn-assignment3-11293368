import React from 'react';
import Layout1 from './components/Layout1'
import SearchbarAndButton from './components/SearchbarAndButton';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';




export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar 
        backgroundColor="#f7f0e8" 
        barStyle="light-content"   
        translucent={false}   
      />
      
      <Layout1 />

      <SearchbarAndButton />
      
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: 'Lato-Regular',
    backgroundColor: '#f7f0e8',
    paddingLeft: 20,
    paddingRight: 20, 
    marginBottom: 30,
    flex: 1,
    gap: 20
  },
});
