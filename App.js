import * as React from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, Text, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Bmi from './bmi';
import Locations from './locations';



/************************************** location cordinates                 *********8*/




export default function App() {
  const [number, onChangeNumber] = React.useState('');
  const [bmiValue,setBmiValue]=useState('00')
  const [height,setHeight]=useState()
  const [weight,setWeight]=useState()
  const [heightsquared,setHeightsquared]=useState()
  const [showresult,setShowResult]=useState(false)

  const toggleshowResult=()=>showresult?setShowResult(false):setShowResult(true)
  const updateWeight=(e)=>setWeight(e)
  const upDateHeight=(e)=>{
    setHeight(e)
    setHeightsquared(e*e)
                          }


function HomeScreen({ navigation }) {
  return ( 
    <View style={{flex:1,justifyContent:'center',backgroundColor:'#00ffff'}}>
    <View style={styles.modalsContainer}> 
    <TouchableOpacity style={styles.iconModal} onPress={() => navigation.navigate('Bmi')}>   
        <Image source={require('./assets/downloaded/bmi.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconModal} onPress={() => navigation.navigate('Locations')}>   
        <Image source={require('./assets/downloaded/geolocation.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconModal} onPress={()=>Alert.alert('Message Sent', 'Emergency message  successfully sent.')}>   
        <Image source={require('./assets/downloaded/sos.png')} />
    </TouchableOpacity>
 </View> 
 </View>
  );
}



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{title:'Health Assistant App'}} />
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="Bmi" component={Bmi} />
    </Stack.Navigator>
  );
}



  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
    marginBottom:'10%',
    paddingVertical:20

  },
  modalsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#00ffff'

   
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bmiValue:{
    fontSize:40,
    textAlign:'center'
  },
  resultview:{
    backgroundColor:'#66ccff',
    paddingTop:25,
    paddingBottom:25,
    paddingLeft:15,
    paddingRight:15,
    boderTopEndRadius:10,
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    fontSize:20,
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
  },
  reset:{
    textAlign:'center',
    marginTop:50,
    backgroundColor:'#ffd24d',
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10,
    paddingBottom:10,
    borderTopEndRadius:3,
    borderTopRightRadius:3,
    borderBottomRightRadius:3,
    borderBottomLeftRadius:3
  }
})
