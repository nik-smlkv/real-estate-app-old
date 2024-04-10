import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.header}>
      <Image source={require("../../assets/header-logo.png")} style={styles.logo} />
      <View style={styles.rightContainer}>
          <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
            <Text style={styles.signInText}>Войти</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.burgerMenu}>
        <Image source={require("../../assets/burger.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 22,
    marginTop: 40,
    backgroundColor: "#1D1F25",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#226DFF",
    marginRight: 16,
    width: 115,
  },
  signInText: {
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
  },
  burgerMenu: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#25262D",
  },
  image:{
    width: 18,
    height: 14,
  }
});

export default Header;
