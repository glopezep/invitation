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

class SignupForm extends Component {
  constructor (props) {
    super(props)
    this.saveUser = this.saveUser.bind(this)
    this.state = {
      fullname: '',
      username: '',
      email: '',
      password: ''
    }
  }

  async saveUser () {
    try {
      const { mutate, goBack } = this.props

      const newUser = {
        fullname: this.state.fullname.toLowerCase(),
        username: this.state.username.toLowerCase(),
        email: this.state.email.toLowerCase(),
        password: this.state.password.toLowerCase()
      }

      const res = await mutate({ variables: { user: newUser } })
    
      goBack()

    } catch (e) {
      Alert.alert(e.message)
    }
  }

  render () {
    return (
      <View>
        <View style={styles.inputGroup}>
          <Text>Fullname:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ fullname: text })}
            value={this.state.fullname}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>Username:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
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
          title='Signup'
          onPress={this.saveUser}
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

const saveUserMutation = gql`
  mutation saveUser($user: newUser) {
    saveUser(user: $user) {
      id
      username
      email
      password
    }
  }
`

export default graphql(saveUserMutation)(SignupForm)
