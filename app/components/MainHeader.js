import React, { Component } from 'react'

import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native'

import Colors from '../styles/colors'
import FontSizes from '../styles/fontSizes'

const MainHeader = () => (
  <View style={Styles.logo}>
    <Text style={Styles.logoTitle}>
      Travolta
    </Text>
    <Text style={Styles.logoSubtitle}>
      Your movie demo app
    </Text>
    <Image style={Styles.logoImage} source={require('../images/john-travolta.png')}/>
  </View>
)

const Styles = StyleSheet.create({
  logo: {
  },
  logoTitle: {
    // Uncommenting the next line will throw an error... for now
    //fontFamily: 'Oleo Script',
  },
  logoSubtitle: {
  },
  logoImage: {
  }
})

export default MainHeader
