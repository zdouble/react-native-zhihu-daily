/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native'
import { DrawerNavigator } from 'react-navigation'
class MyHomeScreen extends Component {
  static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
          <Image
              style={[styles.icon, {tintColor: tintColor}]}
          />
      )
  };

  render() {
      return (
          <Button
              onPress={() => this.props.navigation.navigate('Notifications')}
              title="Go to notifications"
          />
      )
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
          <Image
              style={[styles.icon, {tintColor: tintColor}]}
          />
      )
  };

  render() {
      return (
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Go back home"
          />
      )
  }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
})

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen
    },
    Notifications: {
        screen: MyNotificationsScreen
    }
})

AppRegistry.registerComponent('ZhihuDaily', () => MyApp)
