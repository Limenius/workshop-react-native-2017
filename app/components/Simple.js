import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

const Simple = ({color, title}) => (
  <View style={[{backgroundColor: color}, style]}>
    <Text>
      {title}
    </Text>
  </View>

)

const style = {
  justifyContent: 'center',
  alignItems: 'center', padding: 10,
  width: 100,
  height: 100,
}

export default Simple
