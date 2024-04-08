import React from 'react'
import {View, Text, StyleSheet} from 'react-native';



const Register = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.pageTitle}>Create new Account</Text>
        <Text style={styles.pageSubTitle}>Set up your username and password. You can always change it later</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: '#F5FCFF'
    },
    pageTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    pageSubTitle: {
      fontSize: 15,
      textAlign: 'center',
    },
})


export default Register 