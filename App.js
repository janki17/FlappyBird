import React from 'react';
import {View, StatusBar} from 'react-native';

import HomeScreen from './src/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#FFF" />
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <HomeScreen />
        </View>
      </>
    );
  }
}
