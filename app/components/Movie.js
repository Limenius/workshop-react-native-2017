import React, { Component } from 'react'
import { movies, actors } from '../data'
import MovieHeader from './MovieHeader'
import ListItem from './ListItem'
import {
  View,
  FlatList,
} from 'react-native'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: movies.find((movie) => movie.name === 'Pulp Fiction'),
      actors: actors,
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.movie.actors}
          ListHeaderComponent={<MovieHeader movie={this.state.movie}/>}
          keyExtractor={item => item}
          renderItem={({item}) =>
            <ListItem name={item} image={this.state.actors[item].image}/>
          }
        />
      </View>
    )
  }
}
