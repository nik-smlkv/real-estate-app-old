import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ServicesComponent = ({ services }) => {
  const navigation = useNavigation();
  console.log(services);
  const handleClick = () =>{
    navigation.navigate("Services");
  }
  return (
    <View style={styles.cardsContainer}>
      {services.map((service, index) => (
        <TouchableOpacity key={index} style={styles.serviceCard} onPress={handleClick}>
          <Image source={service.image} style={styles.serviceImage} />
          <Text style={styles.serviceTitle}>{service.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
  },
  serviceCard: {
    width: 80,
    padding: 10,
    margin: 5,
    backgroundColor: "#2D2F36",
    borderRadius: 10,
    alignItems: "center",
  },
  serviceImage: {
    width: 48,
    height: 48,
  },
  serviceTitle: {
    marginTop: 5,
    fontSize: 11,
    color: "white",
  },
});

export default ServicesComponent;
