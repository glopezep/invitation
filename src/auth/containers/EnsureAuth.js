import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  Text
} from 'react-native'

class EnsureAuth extends Component {
  constructor (props) {
    super(props)
    this.verifyToken = this.verifyToken.bind(this)
    this.state = {
      isLoading: true,
      isAuthenticated: false
    }
  }

  async verifyToken () {
    try {
      const { mutate } = this.props
      const token = await AsyncStorage.getItem('token')
      const res = await mutate({ variables: { token } })
      this.setState({ isLoading: false, isAuthenticated: true })
    } catch (e) {
      console.log(e)
      await AsyncStorage.removeItem('token')
      this.setState({ isLoading: false, isAuthenticated: false })
    }
  }

  async componentDidMount () {
    await this.verifyToken()
  }

  render () {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator size='small' />
      )
    }

    if (!this.state.isAuthenticated) {
      return goBack()
    }

    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

const verifyTokenMutation = gql`
  mutation verifyTokenMutation($token: String!) {
    verifyToken(token: $token) {
      username
      group {
        name
      }
    }
  }
`

export default graphql(verifyTokenMutation)(EnsureAuth)
