import React, { Component } from 'react'
import { movies, actors } from '../data'
import MainHeader from './MainHeader'
import ListItem from './ListItem'
import Colors from '../styles/colors'

import {
  View,
  TouchableHighlight,
  FlatList,
} from 'react-native'

export default class MovieList extends Component {
  static navigationOptions = {
    title: 'Movies',
  }

  constructor(props) {
    super(props)
    this.state = {
      movies: movies
    }
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <FlatList
          data={this.state.movies}
          ListHeaderComponent={<MainHeader/>}
          keyExtractor={item => item.name}
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={Colors.subtleAccent}
              activeOpacity={0.5}
              onPress={() => navigate('Movie', {name: item.name})}
            >
              <View>
                <ListItem name={item.name} image={item.image}/>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    )
  }
}
