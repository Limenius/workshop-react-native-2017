import React, { Component } from 'react'
import Colors from '../styles/colors'
import FontSizes from '../styles/fontSizes'

import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native'

const SearchBox = ({value, onChangeText}) => (
  <View style={Styles.container}>
    <TextInput
      style={Styles.input}
      value={value.searchText}
      onChangeText={onChangeText}
      placeholder="Search"
    />
  </View>
)

const Styles = StyleSheet.create({
  container: {
    padding: 9,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: Colors.backgroundSection,
  },
  input: {
    borderColor: Colors.accent,
    backgroundColor: Colors.background,
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 4,
    color: Colors.text,
    fontSize: FontSizes.footnote,
  }
})

export default SearchBox
