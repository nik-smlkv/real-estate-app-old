import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <SvgUri
        width="200"
        height="200"
        uri={require('../../assets/logo.svg')}
        />
      <ActivityIndicator size="large" color="#226DFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1F25',
  },
  logo: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;