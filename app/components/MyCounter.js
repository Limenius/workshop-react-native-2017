import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

export default class MyCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <View style={style.counter}>
        <Button
          onPress={this.tick}
          title="Add one more"
        />
        <Text>
          Count: {this.state.count}
        </Text>
      </View>
    )
  }
}

const style = {
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
