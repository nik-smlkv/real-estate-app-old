import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RecomendedComponent = () => {
  const propertyData = [
    {
      image: require("../../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
    {
      image: require("../../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
    {
      image: require("../../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
    {
      image: require("../../../assets/quarter.png"),
      price: "168 227 р.",
      square: "42.29 м²",
      floor: "10 этаж",
      countOfRooms: "Евро 2",
      quarter: "11 квартал",
    },
  ];
  return (
    <View style={styles.recommendedContainer}>
      <Text style={styles.recommendedTitle}>Рекомендуемые</Text>

      <View style={styles.cardPropertyContainer}>
        <View style={styles.cardProperty}>
          <Text style={styles.cardPropertyTitle}>Избранное</Text>
          <View style={styles.cardImageProperty}>
            <Image source={require("../../../assets/heart.png")} />
          </View>
        </View>
        <View style={styles.cardProperty}>
          <Text style={styles.cardPropertyTitle}>Сравнение объявлений</Text>
          <View style={styles.cardImageProperty}>
            <Image source={require("../../../assets/sravnenie.png")} />
          </View>
        </View>
      </View>
      <View style={styles.cardEstateContainer}>
        {propertyData.map((property, index) => (
          <View key={index} style={styles.cardEstate}>
            <Image source={property.image} style={styles.cardImage} />
            <Text style={styles.cardInfoCost}>{property.price}</Text>
            <View style={styles.rowCardInfo}>
              <Text style={styles.cardInfoText}>{property.square}</Text>
              <Text style={styles.cardInfoText}>{property.floor}</Text>
              <Text style={styles.cardInfoText}>{property.countOfRooms}</Text>
            </View>
            <Text style={styles.cardInfoText}>{property.quarter}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.showMoreButton}>
        <Text style={styles.showMoreButtonText}>Показать еще</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  recommendedContainer: {
    margin: 16,
  },
  cardPropertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 8,
  },
  cardProperty: {
    width: 180,
    height: 118,
    backgroundColor: "#2D2F36",
    borderRadius: 10,
    padding: 15,
    justifyContent: "space-between",
  },
  cardImageProperty: {
    alignItems: "flex-end",
  },
  cardPropertyTitle: {
    fontSize: 17,
    color: "white",
  },
  cardImage: {
    width: "100%",
    height: 96,
    marginBottom: 5,
  },
  cardEstateContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 18,
  },
  cardEstate: {
    width: 180,
    marginBottom: 16,
  },
  showMoreButton: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#007AFF",
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  showMoreButtonText: {
    color: "#FFF",
    fontSize: 17,
  },
  recommendedTitle: {
    fontSize: 22,
    marginBottom: 30,
    color: "#FFF",
  },
  rowCardInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  cardInfoCost: {
    fontSize: 17,
    color: "white",
  },
  cardInfoText: {
    fontSize: 11,
    color: "#B8B9BB",
  },
});
export default RecomendedComponent;
