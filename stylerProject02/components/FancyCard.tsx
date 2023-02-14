import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
            uri:'https://www.jaipurstuff.com/wp-content/uploads/2019/03/hawa-mahal-jaipur.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palacr in the city of Jaipur, India. Built from red anad pink sandstone, it is one the edge of the city Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    card:{

    },
    cardElevated:{

    },
    cardImage:{
        height:200
    },
    cardBody:{},
    cardTitle:{

    },
    cardLabel:{},
    cardDescription:{},
    cardFooter:{}
})