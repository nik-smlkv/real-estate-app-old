import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  const handleContinue = () => {
    // Действия при нажатии на кнопку "Продолжить"
    // Например, валидация данных или отправка формы на сервер
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TouchableOpacity style={styles.arrowBack} onPress={navigateBack}>
          <Image source={require("../../assets/arrow-left.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Регистрация</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Номер телефона</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="+ 375 (29) 213-84-85"
          keyboardType="phone"
          placeholderTextColor="#EBEBF599"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="test@gmail.com"
          keyboardType="email"
          placeholderTextColor="#EBEBF599"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Имя</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Катя"
          keyboardType="name"
          placeholderTextColor="#EBEBF599"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
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
  inputTitle: {
    color: "#B8B9BB",
    marginBottom: 10,
    fontSize: 13,
  },
  title: {
    fontSize: 22,
    color: "white",
  },
  arrowBack: {
    position: "absolute",
    left: 0,
  },
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#1D1F25",
    justifyContent: "start",
    alignItems: "start",
    padding: 20,
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
	backgroundColor: "#25262D",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#B8B9BB",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#EBEBF599",
  },
});

export default Register;
