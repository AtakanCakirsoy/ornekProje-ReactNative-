import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/Header';
//import Header yazdık ancak Header yerine istediğini yazabilirsin.
import Liste from './src/components/Liste';
const App = () => {
  return (
    <View style={{flex:1}}>
      <Header headerText={'Örnek Proje'} />
      <Liste/>
    </View>
  );
};
const styles = StyleSheet.create({

});

export default App;
