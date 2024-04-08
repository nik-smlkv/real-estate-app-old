import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { NavigationContainer } from "@react-navigation/native";
const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <Text>Home</Text>
      </ScrollView>
      <View style={styles.tabContainer}>
        <NavigationContainer>
          <Footer />
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  tabContainer: {
    position: "fixed",
    bottom: 50,
    left: 0,
    right: 0,
  },
});

export default Home;
