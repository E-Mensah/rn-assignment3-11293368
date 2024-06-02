import React from "react";
import { View, FlatList,Text } from 'react-native';
import taskList from './taskinfo.json'

const TaskView = () => {
    return(
        <View style={{flexDirection: 'column',}}>
        <Text style={{fontFamily: 'Lato-Bold',fontSize: 25, fontWeight: '600', marginBottom: 10}}>Ongoing Task</Text>
        <FlatList data={taskList} renderItem={({item}) => {
            return (
              <View key={item.id} style={{width: 350, height: 140, borderRadius: 20, backgroundColor: '#f8f8ff', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 23, marginBottom: 17, borderColor: '#f0e2d3', borderWidth: 2, borderStyle: 'solid'}}>
                  <Text style={{fontSize: 20, fontFamily: 'Lato-Bold', fontWeight: '700'}}>{item.ongoingTask}</Text>
              </View>

            ); 
        }}>

        </FlatList>

      </View>
    );
}

export default TaskView