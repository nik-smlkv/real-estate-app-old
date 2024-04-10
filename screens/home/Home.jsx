import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>Специальное предложение</Text>
            <Text style={styles.subtitle}>
              От 950 евро за м² до конца марта
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/arrow-right.png")} style={styles.image} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1F25",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#105EDC",
    borderRadius: 12,
    padding: 16,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 17,
    color: 'white',
    fontWeight: "",
    fontFamily: "SF Pro Display",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    fontFamily: "SF Pro Text",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "",
  },
  image: {
    width: 12,
    height: 12,
  },
});
export default Home;
