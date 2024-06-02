import React from "react";
import { StyleSheet, View, Image, ScrollView,Text } from 'react-native';

const Categories = () => {
    return(
        <View style={{flexDirection: 'column',gap: 20}}>
        <Text style={{fontFamily: 'Lato-Bold',fontSize: 25, fontWeight: '600'}}>Categories</Text>
        <View style={styles.container4}>
            <ScrollView horizontal={true}>
              <View style={styles.cat1}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15}}> Exercise</Text>
                    <Text style={{fontWeight: '400'}}> 12 Tasks</Text>
                    <Image source={require('./pics/working-online.png')} style={{ width: 200, height: 175, objectFit: 'contain', }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat2}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15, marginLeft: 20}}> Study</Text>
                    <Text style={{fontWeight: '400', marginLeft: 20}}> 15 Tasks</Text>
                    <Image source={require('./pics/working-at-desk.png')} style={{ width: 200, height: 175, objectFit: 'contain', marginLeft: 30 }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat1}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15}}> Read </Text>
                    <Text style={{fontWeight: '400'}}> 13 Tasks</Text>
                    <Image source={require('./pics/working-online.png')} style={{ width: 200, height: 175, objectFit: 'contain', }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat2}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15, marginLeft: 20}}> Code</Text>
                    <Text style={{fontWeight: '400', marginLeft: 20}}> 14 Tasks</Text>
                    <Image source={require('./pics/working-at-desk.png')} style={{ width: 200, height: 175, objectFit: 'contain', marginLeft: 30 }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat1}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15}}> Health & Fitness</Text>
                    <Text style={{fontWeight: '400'}}> 11 Tasks</Text>
                    <Image source={require('./pics/working-online.png')} style={{ width: 200, height: 175, objectFit: 'contain', }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat2}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15, marginLeft: 20}}> Drive </Text>
                    <Text style={{fontWeight: '400', marginLeft: 20}}> 9 Tasks</Text>
                    <Image source={require('./pics/working-at-desk.png')} style={{ width: 200, height: 175, objectFit: 'contain', marginLeft: 30 }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat1}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15}}> Wash</Text>
                    <Text style={{fontWeight: '400'}}> 2 Tasks</Text>
                    <Image source={require('./pics/working-online.png')} style={{ width: 200, height: 175, objectFit: 'contain', }} >

                    </Image>  
                  </View>
              </View>

              <View style={styles.cat2}>
                  <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 15, marginLeft: 20}}> Cook</Text>
                    <Text style={{fontWeight: '400', marginLeft: 20}}> 1 Tasks</Text>
                    <Image source={require('./pics/working-at-desk.png')} style={{ width: 200, height: 175, objectFit: 'contain', marginLeft: 30 }} >

                    </Image>  
                  </View>
              </View>
              
            </ScrollView>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        },
      
        cat1: {
          width: 215, 
          height: 230,
          backgroundColor: '#f8f8ff', 
          borderRadius: 20,
          marginRight: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }, 
        cat2: {
          width: 215, 
          height: 230,
          backgroundColor: '#f8f8ff', 
          borderRadius: 20,
          marginRight: 25,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 5,
        }   
});

export default Categories