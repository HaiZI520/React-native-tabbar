/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation"
export default class FindVC extends Component {
  static navigationOptions = {
    headerTitle: '发现',
    tabBarLabel: '发现',
    tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

