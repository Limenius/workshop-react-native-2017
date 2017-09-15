import React, { Component } from 'react'
import {
  View,
  ActivityIndicator,
  Button,
  Text,
  Picker,
  Slider,
  StyleSheet,
  Switch,
  TextInput,
  Image,
} from 'react-native'
import SimpleComponent from './components/Simple'
import MyCounter from './components/MyCounter'
import { movies } from './data'

export default class App extends Component {
  render() {
    return (
      <View>
      </View>
    )
  }
}

// <Text>Hi there!</Text>
//
// <Button
//   onPress={() => alert('Hi')}
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="This is a sample button"
// />
//
// This image is static
// <Image style={{height: 100, width: 100}} source={require('./images/pulp-fiction.jpg')}/>
//
// This image comes from an uri
// <Image style={{height: 100, width: 100}} source={{uri: 'https://lorempixel.com/100/100/cats/'}}/>
//
// <ActivityIndicator/>
//
// <Picker
//   onValueChange={(itemValue, itemIndex) => alert(`You picked ${itemValue}`)}
// >
//   { movies.map(movie => (
//     <Picker.Item key={movie.name} label={movie.name} value={movie.name} />
//   ))}
// </Picker>
//
// <Slider/>
//
// <Switch/>
//
// <TextInput
//   defaultValue="Type here"
//   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
// />
//
// <SimpleComponent title="hola" color="red"/>
//
// <MyCounter/>
