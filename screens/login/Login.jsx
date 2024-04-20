import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TouchableOpacity style={styles.arrowBack} onPress={navigateBack}>
          <Image source={require("../../assets/arrow-left.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Вход по телефону</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="+ 375 (29) 213-84-85"
        keyboardType="phone"
		  placeholderTextColor="#EBEBF599"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowBack: {
    position: "absolute",
    left: -100,
	 top: 5,
  },
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "start",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1D1F25",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#FFFFFF",
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#105EDC",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 48,
    marginTop: 20,
    backgroundColor: "#EBEBF599",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#EBEBF599",
    fontWeight: "bold",
  },
});

export default LoginScreen;
