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

const ListItemActor = ({actorName, actorImage}) => (
  <View style={Styles.listItem}>
    <Image source={actorImage} style={Styles.itemImage}/>
    <Text style={Styles.itemName}>
      {actorName}
    </Text>
  </View>
)

const Styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.subtleAccent,

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

export default ListItemActor
