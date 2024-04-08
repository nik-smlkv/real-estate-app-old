import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
	const navigation = useNavigation();
 
	const handleSignIn = () => {
	  navigation.navigate('LoginScreen');
	};
 
	return (
	  <View style={styles.header}>
		 <Image
			source={require('../../assets/logo.svg')}
			style={styles.logo}
		 />
		 <View style={styles.rightContainer}>
			<TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
			  <Text style={styles.signInText}>Войти</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.burgerMenu}>
			  <Ionicons name="menu" size={24} color="white" />
			</TouchableOpacity>
		 </View>
	  </View>
	);
 };

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: 16,
  },
  signInText: {
    color: '#1D1F25',
    fontWeight: 'bold',
  },
  burgerMenu: {
    padding: 8,
  },
});

export default Header;