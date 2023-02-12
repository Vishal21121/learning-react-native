import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}></StatusBar>
      <ScrollView>
          <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
