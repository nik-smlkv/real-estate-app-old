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
  // Функция для навигации назад

  return (
    <View style={styles.cardsContainer}>

      <ScrollView horizontal> 
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.serviceCard, index === 0 && styles.firstServiceCard]}
            onPress={() => navigation.navigate(service.component)}
          >
            <Image source={service.image} style={styles.serviceImage} />
            <Text
              style={[
                styles.serviceTitle,
                index === 0 && styles.firstServiceTitle,
              ]}
            >
              {service.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
  },

  serviceImage: {
    width: 48,
    height: 48,
  },
  serviceTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    textAlign: "left",
    color: "white",
  },
  serviceCard: {
    width: 80,
    padding: 10,
    margin: 5,
    backgroundColor: "#2D2F36",
    borderRadius: 10,
    alignItems: "center",
  },
  serviceCard: {
    width: 80,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingRight: 6,
    margin: 5,
    gap: 20,
    backgroundColor: "#2D2F36",
    borderRadius: 10,
  },
  firstServiceCard: {
    backgroundColor: "white", // Цвет фона для первой карточки
  },
  firstServiceTitle: {
    color: "#25262D",
  },
});

export default ServicesComponent;
