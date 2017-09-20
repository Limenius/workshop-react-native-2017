import React, { Component } from 'react'
import MainHeader from './MainHeader'
import ListItem from './ListItem'
import Colors from '../styles/colors'

import {
  View,
  ActivityIndicator,
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
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/movies')
      .then((response) => response.json())
      .then((responseJson) => {
        // Simulate server latency
        //setTimeout(() => 
          this.setState({
            isLoading: false,
            movies: responseJson,
          })
        //  , 5000)
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const { navigate } = this.props.navigation
    const { isLoading, movies } = this.state

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
          data={movies}
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
