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
  View
} from 'react-native';

export default class TestProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Text style = {styles.redColor}> Red </Text>
        <Text style = {styles.blueColor}> Blue </Text>
        <Text style = {styles.greenColor}> Green </Text>

        <Text>
          <Text> I am </Text>
          <Text style = {{fontWeight: 'bold'}}> Happy, </Text>
          <Text style = {{fontWeight: 'italic'}}> React, </Text>
          <Text style = {{fontWeight: 'normal'}}> Angry. </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  redColor: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  blueColor: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  },
  greenColor: {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 18
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
