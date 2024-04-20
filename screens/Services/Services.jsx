import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
const Services = () => {
	const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  const cardData = [
    {
      icon: require("../../assets/services-imgs/credit.png"),
      text: "Кредит",
      size: "30%",
    },
    {
      icon: require("../../assets/services-imgs/rassrochka.png"),
      text: "Рассрочка",
      size: "31%",
    },
    {
      icon: require("../../assets/services-imgs/skidki.png"),
      text: "Скидки",
      size: "31%",
    },
    {
      icon: require("../../assets/services-imgs/pamyatka.png"),
      text: "Памятка для оплаты платежей через ЕРИП",
      size: "47%",
    },
    {
      icon: require("../../assets/services-imgs/oplata.png"),
      text: "Оплата платежей через банк для клиентов партнеров",
      size: "48%",
    },
    {
      icon: require("../../assets/services-imgs/ekskursia.png"),
      text: "Записаться на экскурсию",
      size: "47%",
    },
    {
      icon: require("../../assets/services-imgs/zayavlenie.png"),
      text: "Электронное заявление",
      size: "48%",
    },
    {
      icon: require("../../assets/services-imgs/calculator.png"),
      text: "Кредитный калькулятор",
      size: "64%",
    },
    {
      icon: require("../../assets/services-imgs/akciya.png"),
      text: "Акции",
      size: "30%",
    },
    {
      icon: require("../../assets/services-imgs/complex.png"),
      text: "О комплексе",
      size: "47%",
    },
    {
      icon: require("../../assets/services-imgs/company.png"),
      text: "О компании",
      size: "48%",
    },
    {
      icon: require("../../assets/services-imgs/quarters.png"),
      text: "Кварталы",
      size: "25%",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.servicesBlock}>
        <TouchableOpacity style={styles.arrowBack} onPress={navigateBack}>
          <Image source={require("../../assets/arrow-left.png")} />
        </TouchableOpacity>
        <Text style={styles.servicesTitle}>Все сервисы</Text>
      </View>
      <View style={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <View
            key={index}
            style={[
              styles.card,
              { backgroundColor: "#2D2F36", width: card.size },
            ]}
          >
            <Image source={card.icon} style={styles.icon} />
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1F25",
    flexGrow: 1,
  },
  arrowBack: {
    position: "absolute",
    left: 10,
  },
  servicesBlock: {
    display: "flex",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  servicesTitle: {
    color: "white",
    fontSize: 22,
  },
  cardsContainer: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 0,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#2D2F36",
    margin: 5,
    padding: 10,
    gap: 20,
  },
  cardText: {
    textAlign: "left",
    color: "#fff",
    maxWidth: 150,
  },
  icon: {
    alignSelf: "start",
  },
});
export default Services;
