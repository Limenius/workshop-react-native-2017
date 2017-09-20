import React, { Component } from 'react'
import { movies, actors } from '../data'
import MovieHeader from './MovieHeader'
import ListItem from './ListItem'
import Colors from '../styles/colors'
import { baseUrl } from '../constants'
import {
  View,
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
} from 'react-native'

export default class Movie extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  })

  constructor(props) {
    super(props)
    this.state = {
      movieName: props.navigation.state.params.name,
      isLoading: true,
      movie: null,
    }
  }

  componentDidMount() {
    return fetch(baseUrl + '/movies/' + this.state.movieName)
      .then((response) => response.json())
      .then((responseJson) => {

        //setTimeout(() =>
        this.setState({
          isLoading: false,
          movie: responseJson,
        })
        //  , 5000)
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const { movie, isLoading } = this.state
    const { navigate } = this.props.navigation

    if (isLoading) {
      return (
        <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
    return (
      <View>
        <FlatList
          data={movie.actors}
          ListHeaderComponent={<MovieHeader movie={movie}/>}
          keyExtractor={item => item.name}
          renderItem={({item}) =>
            <ListItem name={item.name} image={item.image}/>
          }
        />
      </View>
    )
  }
}

