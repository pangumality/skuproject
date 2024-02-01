import React, {useEffect,useState} from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Location from 'expo-location';

export default function Locations() {

  const [mapRegion, setmapRegion] = useState({
    latitude:-15.505520,
    longitude:28.341391,
    latitudeDelta: 0.0001,
    longitudeDelta: 0.0001
    
  });

  

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('right location')
      console.log(location.coords.latitude)
      console.log(location.coords.longitude)

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const woodlandsStadium={
    latitude:-15.445531,
    longitude:28.34651,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001

  }

  const MahopoHospital={
    latitute:-15.505520, 
    longitude:28.341391,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001
  }

  const chilenjeLevelOne={
    latitude:-15.448736993237288, 
    longitude:28.33878438725528,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001

  }

  const choiceNet={
    latitude:-15.47981543793608,
    longitude: 28.343780454774652,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001
  }

  const gjFItness={
    latitude:-15.438307837381403, 
    longitude:28.432754874375398,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001
  }

  const ceragemGym={
    latitude:-15.443602727434444, 
    longitude:28.390869499977136,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001
  }



function CustomMarker() {
  return (
    <View style={styles.marker}>
      <Image source={require("./assets/downloaded/geolocation.png")} style={styles.markerImage} />
    </View>
  );
}

  

  const intialRegion={
    latitude: -15.4879567,
    longitude: 28.347889,
    latitudeDelta: 0.9001,
    longitudeDelta: 0.9001
  }

  const locationsArray=[MahopoHospital,woodlandsStadium]


  return (
    <View style={styles.container}>
    <MapView
    initialRegion={woodlandsStadium}
      style={{ alignSelf: 'stretch', height: '100%' }}
  
    >
      <Marker coordinate={mapRegion} title='Marker' />
      <Marker coordinate={woodlandsStadium} title='Marker' />
      <Marker coordinate={chilenjeLevelOne} title='Marker' />
      <Marker coordinate={gjFItness} title='Marker' />
      <Marker coordinate={ceragemGym} title='Marker' />
      <Marker coordinate={choiceNet} title='Marker'/>  
    </MapView>
  </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '75%',
  },

  marker: {
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
  color: "#fff",   
  },
  markerImage:{
    width:90,
    height:30
  }
});
