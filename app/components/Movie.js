import React, { Component } from 'react'
import { movies, actors } from '../data'
import MovieHeader from './MovieHeader'
import ListItem from './ListItem'
import {
  View,
} from 'react-native'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: movies.find((movie) => movie.name === 'Pulp Fiction')
    }
  }

  render() {
    return (
      <View>
        <MovieHeader movie={this.state.movie}/>
        { this.state.movie.actors.map(actor => (
          <ListItem key={actor} name={actor} image={actors[actor].image}/>
        ))}
      </View>
    )
  }
}
