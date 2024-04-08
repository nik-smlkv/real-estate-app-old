import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Header from "../../components/header/Header";
import FooterMenu from "../../components/footer/Footer";

const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Text>Home</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Home;
