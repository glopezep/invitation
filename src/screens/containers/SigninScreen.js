import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import SigninForm from '../../auth/containers/SigninForm'

class SigninScreen extends Component {
  constructor (props) {
    super(props)
    this.goToSignup = this.goToSignup.bind(this)
  }

  static navigationOptions = {
    title: 'Sign in'
  }

  goToSignup () {
    this.props.navigation.navigate('Signup')
  }

  render () {
    return (
      <View style={styles.container}>
        <SigninForm navigate={this.props.navigation.navigate}/>
        <Button
          title='Signup'
          onPress={this.goToSignup}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SigninScreen
