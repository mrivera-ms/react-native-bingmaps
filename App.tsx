import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import BingMapsView from 'react-native-bing-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hello PhysOps!</Text>
      <BingMapsView
        credentialsKey=""
        mapLocation={{ lat: 12.9010875, long: 77.6095084, zoom: 15 }}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 400,
    width: 390,
    marginVertical: 5,
  },
  mainText:{
    fontSize: 30
  }

});