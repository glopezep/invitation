import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
 } from 'react-apollo'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './screens/containers/HomeScreen'
import SigninScreen from './screens/containers/SigninScreen'
import SignupScreen from './screens/containers/SignupScreen'
import EnsureAuth from './auth/containers/EnsureAuth'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({ networkInterface })

const Router = StackNavigator({
  SigninScreen: { screen: SigninScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: HomeScreen },
})

const Invitation = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
)

AppRegistry.registerComponent('Invitation', () => Invitation);
