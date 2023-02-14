import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}></StatusBar>
      <ScrollView>
          <FlatCards />
          <ElevatedCards/>
          <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
