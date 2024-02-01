import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View,TouchableOpacity} from 'react-native';

const Bmi = () => {
  //const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [bmiValue,setBmiValue]=useState('00')
  const [height,setHeight]=useState()
  const [weight,setWeight]=useState()
  const [heightsquared,setHeightsquared]=useState()
  const [showresult,setShowResult]=useState(false)


  const upDateHeight=(e)=>{
    setHeight(e)
    setHeightsquared(e*e)
                          }
  const updateWeight=(e)=>setWeight(e)
  const toggleshowResult=()=>showresult?setShowResult(false):setShowResult(true)



//MahopoHospital,chilenjeLevelOne,choiceNet,NameCarePhamacy,gjFItness,ceragemGym
  return (
    <SafeAreaView style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'#00ffff'}}>
     {
        showresult?
        <View style={styles.resultview}>
        <Text style={{color:'white',fontSize:20}}>{`Your BMI is ${(weight/heightsquared).toFixed(2)}`}</Text>
        <TouchableOpacity ><Text style={styles.reset} onPress={toggleshowResult}>reset</Text></TouchableOpacity>
     </View>
                :

                <View>
                <TextInput
                  style={styles.input}
                  onChangeText={updateWeight}
                 // value={number}
                  placeholder="enter weight"
                  keyboardType="numeric"
                />
                 <TextInput
                  style={styles.input}
                  onChangeText={upDateHeight}
                  //value={number}
                  keyboardType='numeric'
                  placeholder='enter height'
                  
                />
                <TouchableOpacity style={{backgroundColor:'#66b3ff',paddingTop:10,paddingBottom:10,borderRadius:5}} onPress={toggleshowResult}>
                  <Text style={{textAlign:'center',color:'white'}}>calculate</Text>
                </TouchableOpacity>
                </View>         
              
     }
    
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderWidth:2,
    borderColor:'#e6e6e6',
    backgroundColor:'white'
  
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
    borderBottomLeftRadius:3,
    width:150
  }

});

export default Bmi;