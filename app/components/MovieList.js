import React, { Component } from 'react'
import { movies, actors } from '../data'
import MainHeader from './MainHeader'
import ListItem from './ListItem'
import {
  View,
  FlatList
} from 'react-native'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movies
    }
  }

  render() {
    return (
      <View>
        <MainHeader/>
        {this.state.movies.map(movie => (
            <ListItem key={movie.name} name={movie.name} image={movie.image}/>
        ))}
      </View>
    )
  }
}
