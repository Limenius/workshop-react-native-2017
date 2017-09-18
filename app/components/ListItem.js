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

const ListItem = ({name, image}) => (
  <View style={Styles.listItem}>
    <Image source={image} style={Styles.itemImage}/>
    <Text style={Styles.itemName}>
      {name}
    </Text>
  </View>
)

const Styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.subtleAccent,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 18,
  },
  itemImage: {
    height: 84,
    width: 84,
  },
  itemName: {
    color: Colors.text,
    fontWeight: 'bold',
  },

})

export default ListItem
