import React from 'react';

import {
  View, // It is like div
  Text, // It is text
  SafeAreaView, // it is to handle the notches in the screen
  Button,
  Alert
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop:180}}>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Button
        title="Press me"
        color="#00FFAA"
        onPress={()=>Alert.alert("Button Pressed")}
      />
      </View>
    </SafeAreaView>
  );
}

export default App;
