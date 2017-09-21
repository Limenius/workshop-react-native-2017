import React, { Component } from 'react'
import MainHeader from './MainHeader'
import ListItem from './ListItem'
import SearchBox from './SearchBox'
import Colors from '../styles/colors'
import { baseUrl } from '../constants'

import {
  View,
  ActivityIndicator,
  TouchableHighlight,
  FlatList,
  TextInput,
} from 'react-native'

export default class MovieList extends Component {
  static navigationOptions = {
    title: 'Movies',
  }

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      moviesList: [],
      isLoading: true,
      searchText: '',
    }

    //this.setSearchText = this.setSearchText.bind(this)

  }

  componentDidMount() {
    return fetch(baseUrl + '/movies')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          movies: responseJson,
          moviesList: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  //setSearchText(text) {
  //  const regex = new RegExp(text, "gi")
  //  this.setState({
  //    searchText: text,
  //    moviesList: this.state.movies.filter(movie => movie.name.match(regex)),
  //  })
  //}

  render() {
    const { navigate } = this.props.navigation
    const { isLoading, } = this.state

    if (isLoading) {
      return (
        <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
        {/*<SearchBox
          value={this.state.searchText}
          onChangeText={this.setSearchText}
        />*/}
        <FlatList
          style={{flex: 1}}
          data={this.state.movies/*List*/}
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
