import {StyleSheet, Text, View, Linking, Image,TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image source={{
            uri:'https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
        }} style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            {/* numberofLines prop makes sure that the no of lines appears according to the number provided */}
            <Text numberOfLines={2}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quam aperiam odit recusandae
            </Text>
        </View>
        <View style={styles.footerContainer}>
            {/* numberofLines prop makes sure that the no of lines appears according to the number provided */}
            <TouchableOpacity onPress={()=> openWebsite('https://www.imdb.com/title/tt4052886/')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> openWebsite('https://github.com/Vishal21121')}>
                <Text style={styles.socialLinks}>Follow e</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage:{
    height:250
  },
  bodyContainer:{},
  footerContainer:{},
  socialLinks:{}
});
