import React from "react";
import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';

const SearchbarAndButton = () => {
    return(
        <View style={styles.container3}>
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'white', height: 50, borderBottomLeftRadius: 12, borderTopLeftRadius: 12, justifyContent: 'center', alignItems: 'center', paddingLeft: 20}}>
            <Image 
            source={require('./pics/search.png')}
            style={{ objectFit: 'cover', width: 30, height: 30, borderRadius: 25,}}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#000"
            keyboardType="default"
          />
        </View>
        
        <TouchableOpacity>
        <View style={styles.button}>
          <Image
          source={require('./pics/slider.png')}
          style={{ objectFit: 'cover', width: 40, height: 40, borderRadius: 25,}}  
          />
        </View>
        </TouchableOpacity>
      </View>

    );
}

const styles = StyleSheet.create({
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f7f0e8'
      },
    
      input: {
        height: 50,
        backgroundColor: 'white',
        width: 213,
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: '600',
      },
    
      button: {
        width: 60,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#ff4500',
        justifyContent: 'center',
        alignItems: 'center',
      },

});

export default SearchbarAndButton