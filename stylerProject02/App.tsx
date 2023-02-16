import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

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
          <FancyCard/>
          <ContactList/>
          <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
