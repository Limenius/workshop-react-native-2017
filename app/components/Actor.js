import React, { Component } from 'react'
import { actors } from '../data'
import Colors from '../styles/colors'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

export default class Actor extends Component {
  // Set an apropriate title

  constructor(props) {
    super(props)
    this.state = {
      // Set actor based on navigation parameters
      actor: actors['John Travolta'],
    }
  }

  render() {
    const { actor } = this.state

    return (
      <View style={Styles.container}>
        <Image style={Styles.image} source={actor.image}/>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.background
  },
  image: {
    height: 400,
    width: undefined,
  },
})
