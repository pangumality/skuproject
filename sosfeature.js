import React from 'react';
import { Button, Alert } from 'react-native';


export default function SOSButton() {
  const handlePress =  () => {
   
        Alert.alert('SOS Sent', 'Emergency message sent successfully.');
      }
  
    return (
      <Button
        title="SOS"
        onPress={handlePress}
      />
    );
  }
