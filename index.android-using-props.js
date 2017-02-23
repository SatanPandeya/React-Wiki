import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry
} from 'react-native';

class TestProject extends Component{
  render(){
    return(
      <View style = {styles.styleTextContet}>
        <LoadProject name = 'ToDoApp A'/>
        <LoadProject name = 'ToDoApp B'/>
        <LoadProject name = 'ToDoApp C'/>
        <LoadProject name = 'ToDoApp D'/>

      </View>
  );
  }
}
class LoadProject extends Component{
  render(){
    return(
      <Text> Project name: {this.props.name} </Text>
    );
  }
}
const styles = StyleSheet.create({
  styleTextContet:{
    textAlign: 'center',
    padding: 20
  },
});
AppRegistry.registerComponent('TestProject', () => TestProject);
