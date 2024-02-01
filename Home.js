import React, {useEffect,useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Bmi from './bmi';

export default function Home() {
  return (  
    
       <View style={styles.modalsContainer}> 
          <TouchableOpacity style={styles.iconModal}>   
              <Image source={require('./assets/downloaded/bmi.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconModal}>   
              <Image source={require('./assets/downloaded/geolocation.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconModal}>   
              <Image source={require('./assets/downloaded/sos.png')} />
          </TouchableOpacity>
       </View>   
              
  );
}


const styles = StyleSheet.create({
  iconModal:{
    backgroundColor:'#f2f2f2',
    padding:10,
    borderRadius:15, 
    alignItems:'center',
    maxWidth:'40%',
    marginHorizontal:'5%',
    marginBottom:'10%'

  },
  modalsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#ffffff',
    flex:1
   
  }
})
;
