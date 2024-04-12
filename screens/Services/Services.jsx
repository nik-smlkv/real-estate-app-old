import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Services = () => {
  return (
    <View style={styles.container}>
      <Text>Сервисы</Text>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
export default Services