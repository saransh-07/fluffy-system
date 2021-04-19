import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Insta from './screens/insta';
import Fb from './screens/fb';
export default class App extends React.Component{
  render(){
    return(
    
      <AppContainer/>
    
    );
  }
}
const AppNav = createBottomTabNavigator({
 Instagram : Insta,
 Facebook : Fb
});
const AppContainer = createAppContainer(AppNav);