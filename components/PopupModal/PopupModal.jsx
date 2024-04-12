import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
const PopupModal = ({ onClose }) => {
	const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleLoginPress = () => {
	navigation.navigate("Login")
  };

  const handleRegisterPress = () => {
	navigation.navigate("Register")
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2D2F36",
        width: "100%",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <TouchableOpacity onPress={toggleModal}>
        <TouchableOpacity onPress={onClose} style={{ alignItems: "flex-end" }}>
          <View style={styles.closeContainer}>
            <Image
              source={require("../../assets/close.png")}
              style={{ width: 12, height: 12 }}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/auth-logo.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>Вход или регистрация</Text>
        <Text style={styles.subtitle}>
          Войдите в аккаунт, чтобы получить доступ ко всем функциям приложения
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>или</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegisterPress}
        >
          <Text style={styles.buttonText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["up", "down"]}
        onBackdropPress={toggleModal}
      ></Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {},
  icon: {
    marginBottom: 33,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    maxWidth: 292,
    color: "#B8B9BB",
  },
  button: {
    backgroundColor: "#226DFF",
    padding: 15,
    width: "95%",
    alignItems: "center",

    borderRadius: 10,
  },
  registerButton: {
    padding: 15,
    borderColor: "white",
    borderWidth: 1,
    width: "95%",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
  textContainer: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,

    height: 1,
    backgroundColor: "#B8B9BB",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#B8B9BB",
    fontSize: 16,
  },
  closeContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#7676803D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },
});
export default PopupModal;
