/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AppNavigator } from './navigator';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 21 : 0 }} >
        <AppNavigator />
      </View>
    );
  }
}


