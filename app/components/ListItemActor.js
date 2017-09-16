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
  },
  itemImage: {
  },
  itemName: {
  },

})

export default ListItemActor
