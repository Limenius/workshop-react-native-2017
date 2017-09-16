import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native'
import { movies, actors } from './data'
import Colors from './styles/colors'
import FontSizes from './styles/fontSizes'
import MovieHeader from './components/MovieHeader'
import ListItemActor from './components/ListItemActor'
import MainHeader from './components/MainHeader'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie : movies.find((movie) => movie.name === 'Grease')
    }
  }
  render() {
    const { movie } = this.state
    const actorName = movie.actors[0]
    const actorImage = actors[actorName].image
    return (
      <ScrollView style={Styles.container}>

        <MovieHeader movie={movie}/>
        <ListItemActor actorName={actorName} actorImage={actorImage}/>
        <MainHeader/>

      </ScrollView>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
