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
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  card: {
    width:350,
    height:340,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  elevatedCard: {
    backgroundColor:'#E07C24',
    elevation:4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4
  },
  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    color:'#000',
    fontSize:16,
    fontWeight:'600'
  },
  cardImage:{
    height:190
  },
  bodyContainer:{
    padding:10,
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks:{
    fontSize:16,
    color:'#000',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:8,
  }
});
