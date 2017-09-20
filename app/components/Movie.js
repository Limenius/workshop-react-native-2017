import React, { Component } from 'react'
import { movies, actors } from '../data'
import MovieHeader from './MovieHeader'
import ListItem from './ListItem'
import Colors from '../styles/colors'
import {
  View,
  TouchableHighlight,
  FlatList,
} from 'react-native'

export default class Movie extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  })

  constructor(props) {
    super(props)
    this.state = {
      movie: movies.find((movie) => movie.name === props.navigation.state.params.name),
      actors: actors,
    }
  }

  render() {
    const { movie } = this.state
    const { navigate } = this.props.navigation

    return (
      <View>
        <FlatList
          data={movie.actors}
          ListHeaderComponent={<MovieHeader movie={movie}/>}
          keyExtractor={item => item}
          renderItem={({item}) =>

            <ListItem name={item} image={this.state.actors[item].image}/>
          }
        />
      </View>
    )
  }
}

