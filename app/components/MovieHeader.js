import React, { Component } from 'react'

import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'

import Colors from '../styles/colors'
import FontSizes from '../styles/fontSizes'

const MovieHeader = ({movie}) => (
  <View style={Styles.movieHeader}>
    <Image style={Styles.mainImage} source={movie.image}/>

    <View style={Styles.headline}>
      {/*<View style={Styles.mainHead}>*/}
        <Text style={Styles.title}>{movie.name}</Text>
        <View style={Styles.yearHolder}><Text style={Styles.year}>{movie.year}</Text></View>
      {/*</View>*/}
      {/*<View style={Styles.subHead}>*/}
        <Text style={Styles.director}>Directed by</Text>
        <Text style={Styles.itemName}>{movie.director}</Text>
      {/*</View>*/}
    </View>
  </View>

)

export default MovieHeader

const windowSize = Dimensions.get('window')

const Styles = StyleSheet.create({
  movieHeader: {
    backgroundColor: Colors.background,
  },
  mainHead: {
    paddingBottom: 9,

    //borderColor: 'coral',
    //borderWidth: 2,

    //flexDirection: 'row',
    //alignItems: 'center',
  },
  subHead: {
    //borderColor: 'purple',
    //borderWidth: 2,

    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'baseline',
  },
  mainImage: {
    height: 210,
    width: undefined
  },
  headline: {
    borderLeftColor: Colors.accent,
    borderLeftWidth: 9,
    backgroundColor: Colors.backgroundSection,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 9,
    paddingBottom: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSizes.largeTitle,

    //borderColor: 'red',
    //borderWidth: 2,

    //flex: 1,
  },
  yearHolder: {
    height: 48,
    width: 48,
    borderRadius: 48/2,
    backgroundColor: Colors.highlight,
    overflow: 'hidden',

    //borderWidth: 2,

    //justifyContent: 'center',
    //alignItems: 'center',
  },
  year: {
    color: 'white',
    fontWeight: 'bold',
  },
  director: {
    color: Colors.text,

    //borderColor: 'blue',
    //borderWidth: 2,
  },
  itemName: {
    color: Colors.text,
    fontWeight: 'bold',


    //borderColor: 'green',
    //borderWidth: 2,

    //textAlign: 'right',
    //flex: 1,
  },
})
