import React, { Component } from 'react'
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { graphql, gql } from 'react-apollo'

class SigninForm extends Component {
  constructor (props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }

  async authenticate () {
    try {
      const username = this.state.username.toLowerCase()
      const password = this.state.password.toLowerCase()
      const { mutate, navigate } = this.props
      const res = await mutate({ variables: { username, password } })
      navigate('Home')
      // Alert.alert(res.data.authenticate.token)
    } catch (e) {
      Alert.alert(e.message)
    }
  }

  render () {
    return (
      <View>
        <View style={styles.inputGroup}>
          <Text>Username:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>
        <Button
          title='Signin'
          onPress={this.authenticate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

const authenticateMutation = gql`
mutation authenticateMutation($username: String!, $password: String!) {
  authenticate(username: $username, password: $password) {
    token
  }
}
`

export default graphql(authenticateMutation)(SigninForm)
