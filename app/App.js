import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const Colors = {
    highlight: '#E23E57',
    accent: '#65799B',
    subtleAccent: '#E2EFF1',
    backgroundSection: '#E2EFF1',
    text: '#555273',
    background: '#FFFFFF',
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Box style={{backgroundColor: Colors.subtleAccent, flex: 0.5}}/>
        <Box style={{backgroundColor: Colors.accent, flex: 0.2}}/>
        <Box style={{backgroundColor:Colors.text, flex: 0.3}}/>
      </View>
    )
  }
}

const Box = ({style, text}) => <View style={{ backgroundColor: '#E23E57', padding: 9,  ...style}}><Text style={{color: 'white'}}>{text}</Text></View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //alignItems: 'center',
    //alignItems: 'stretch',
    //alignItems: 'baseline',
    //alignItems: 'flex-start',
    //alignItems: 'flex-end',
    flex: 1,
    backgroundColor: '#E2EFF1',
  },
})
