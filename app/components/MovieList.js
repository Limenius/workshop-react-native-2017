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
        <FlatList
          data={this.state.movies}
          ListHeaderComponent={<MainHeader/>}
          keyExtractor={item => item.name}
          renderItem={({item}) =>
            <ListItem name={item.name} image={item.image}/>
          }
        />
      </View>
    )
  }
}
