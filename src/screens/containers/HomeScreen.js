import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import EnsureAuth from '../../auth/containers/EnsureAuth'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <EnsureAuth goBack={this.props.navigation.goBack}>
        <View>
          <Text>Home View</Text>
        </View>
      </EnsureAuth>
    )
  }
}

export default HomeScreen
