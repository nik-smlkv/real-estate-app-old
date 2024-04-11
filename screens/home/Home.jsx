import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import Header from "../../components/header/Header";
import FormComponent from "../../components/HomeComponents/FormComponent/FormComponent";
import RecomendedComponent from "../../components/HomeComponents/RecommendedComponent/RecomendedComponent";
import NewsComponent from "../../components/HomeComponents/NewsComponent/NewsComponent";

const Home = () => {

  const handleServicePress = (serviceTitle) => {
    // Обработка навигации на соответствующий компонент по нажатию карточки
    console.log("Переход на компонент:", serviceTitle);
  };
  const services = [
    {
      title: "Все сервисы",
      image: require("../../assets/cards-icon/category.png"),
    },
    { title: "Кварталы", image: require("../../assets/cards-icon/estate.png") },
    { title: "Кредит", image: require("../../assets/cards-icon/card.png") },
    {
      title: "Рассрочка",
      image: require("../../assets/cards-icon/wallet-minus.png"),
    },
    {
      title: "Новости \n и акции",
      image: require("../../assets/cards-icon/discount-shape.png"),
    },
    {
      title: "Час \n с Агентом",
      image: require("../../assets/cards-icon/user-tag.png"),
    },
    {
      title: "Кредитный калькулятор",
      image: require("../../assets/cards-icon/calculator.png"),
    },
  ];

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
            <Image
              source={require("../../assets/arrow-right.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <ScrollView horizontal={true}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.serviceCard,
                  index === 0 && styles.firstServiceCard,
                ]}
                onPress={() => handleServicePress(service.title)}
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
        <FormComponent />
        <RecomendedComponent />
        <NewsComponent />
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
    color: "white",
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
  cardsContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
  },
  serviceCard: {
    width: 80,
    paddingTop: 5,
    paddingBottom: 10,
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
});
export default Home;
