import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import SignupForm from '../../auth/containers/SignupForm'

class SignupScreen extends Component {
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Sign up'
  }

  render () {
    return (
      <View style={styles.container}>
        <SignupForm navigate={this.props.navigation.navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SignupScreen
